import React, { useState, useContext, useCallback, useReducer } from 'react';
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

import { formReducer } from '../../utiles/formReducer'
import { NewsContext } from '../../contexts/index';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { validatorRequire } from '../../utiles/validator';

const Auth = () => {
    const auth = useContext(NewsContext)

    const [message, setMessage] = useState('');

    const [formState, dispatch] = useReducer(formReducer, {
        inputs: {
            email: {
                value: '',
                isValid: false
            },
            password: {
                value: '',
                isValid: false
            },
        },
        isValid: false
    })


    const inputHandler = useCallback((id, value, isValid) => {
        dispatch({
            type: 'INPUT_CHANGE',
            value: value,
            isValid: isValid,
            inputId: id
        })
    }, []);

    const history = useHistory();

    const handleSubmit = event => {
        event.preventDefault()

        console.log(formState.inputs);
        const allUser = auth.allUsers;

        const user = allUser.find(user =>
            user.email === formState.inputs.email.value &&
            user.password === formState.inputs.password.value);

        if (user) {
            setMessage("خوش آمدید");
            localStorage.setItem("token", JSON.stringify(user.email));
            auth.login(user.email);
            history.push('/news');
        }
        else {
            setMessage("ایمیل یا پسورد اشتباه است");

        };

        console.log(allUser);
    }

    const handleRegister = event => {
        event.preventDefault();

        const allUser = auth.allUsers;
        const user = allUser.find(user => user.email === formState.inputs.email.value)

        if (user) {
            setMessage("این ایمیل قبلا ثبت شده");
        }
        else {
            allUser.push({
                user: '',
                email: formState.inputs.email.value,
                password: formState.inputs.password.value
            });
            console.log(allUser);

            setMessage("ثبت  نام با موفقیت انجام شد");
        };

    }

    return (
        <div className="container col-xl-10 col-xxl-8 px-4 py-5">
            <div class="row align-items-center g-5 py-5">


                <main className="col-10 mx-auto col-lg-5">
                    <form onSubmit={handleSubmit} className="p-5 rounded-3 bg-body shadow-sm">
                        {/* <img className="mb-4" src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width={72} height={57} /> */}
                        {/* <h1 className="h3 mt-3 mb-3 fw-normal">ورود</h1> */}

                        <Input
                            id="email"
                            type="email"
                            element="input"
                            placeholder="name@example.com"
                            label="ایمیل"
                            validators={[validatorRequire()]}
                            errorText="لطفا ایمیل معتبر وارد کنید."
                            onInput={inputHandler}
                        />

                        <Input
                            type="password"
                            id="password"
                            placeholder="رمز عبور"
                            label="رمز عبور"
                            errorText="پسورد شامل حداقل 6 کارکتر باشد"
                            validators={[validatorRequire()]}
                            onInput={inputHandler}
                        />

                        <div className="form-floating mt-3">
                            <Button
                                className="w-50 btn btn-lg btn-primary"
                                type="submit"
                                disabled={!formState.isValid}>
                                ورود
                        </Button>
                            <Button
                                className="w-50 btn btn-lg btn-light"
                                onClick={handleRegister}
                                disabled={!formState.isValid}>
                                ثبت نام
                        </Button>
                            {message && <p className="mt-3 text-danger">{message}</p>}
                        </div>
                    </form>
                </main>
            </div>
        </div>
    );
};
export default Auth;
