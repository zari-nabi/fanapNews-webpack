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
    const [messageSuccess, setMessageSuccess] = useState('');

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
        event.preventDefault();

        if(!formState.inputs.email.value || !formState.inputs.password.value){
            setMessage("لطفا ایمیل و پسورد را وارد کنید");
            return;
        }

        console.log(formState.inputs);
        const allUser = auth.allUsers;

        const user = allUser.find(user =>
            user.email === formState.inputs.email.value &&
            user.password === formState.inputs.password.value);

        if (user) {
            setMessageSuccess("خوش آمدید");
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

        if(!formState.inputs.email.value || !formState.inputs.password.value){
            setMessage("لطفا ایمیل و پسورد را وارد کنید");
            return;
        }

        const allUser = auth.allUsers;
        const user = allUser.find(user => user.email === formState.inputs.email.value)

        if (user) {
            setMessage("این ایمیل قبلا ثبت شده");
            setMessageSuccess(null);
        }
        else {
            allUser.push({
                user: '',
                email: formState.inputs.email.value,
                password: formState.inputs.password.value
            });
            console.log(allUser);
            setMessage(null);
            setMessageSuccess("ثبت  نام با موفقیت انجام شد");
        };

    }

    return (
        <>
            <section id="contact" className="contact section-bg">
                <div className="top"></div>
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>LOGIN</h2>
                        <p>ورود و ثبت نام</p>
                    </div>
                    <div className="row center  mb-4">

                        <div className="col-lg-6">
                            <form onSubmit={handleSubmit} role="form" className="php-email-form">
                                <Input
                                    id="email"
                                    type="email"
                                    element="input"
                                    placeholder="name@example.com"
                                    label="ایمیل"
                                    data-rule="email"
                                    data-msg="لطفا ایمیل معتبر وارد کنید"
                                    validators={[validatorRequire()]}
                                    errorText="لطفا ایمیل معتبر وارد کنید."
                                    onInput={inputHandler}
                                />
                                <Input
                                    type="password"
                                    id="password"
                                    placeholder="رمز عبور"
                                    label="رمز عبور"
                                    errorText="پسورد شامل حداقل 4 کارکتر باشد"
                                    data-rule="minlen:4"
                                    data-msg="پسورد شامل حداقل 4 کارکتر باشد"
                                    validators={[validatorRequire()]}
                                    onInput={inputHandler}
                                />
                               
                                <div className="mb-3">
                                    <div className="loading">Loading</div>
                                    {message && 
                                    <div className="error-message"  data-aos="fade-down">{message}</div>
                                    }
                                    {messageSuccess && 
                                    <div className="sent-message"  data-aos="fade-down">{messageSuccess}</div>
                                    }
                                </div>
                                <div className="row mx-2 d-flex justify-content-between ">
                                    <Button
                                        type="submit"
                                        // disabled={!formState.isValid}
                                        >
                                        ورود
                                    </Button>
                                    <Button
                                        type="register"
                                        onClick={handleRegister}
                                        // disabled={!formState.isValid}
                                        >
                                        ثبت نام
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            
        </>
    );
};
export default Auth;
