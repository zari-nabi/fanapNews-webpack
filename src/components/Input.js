import React, { useReducer, useEffect } from 'react'
import { validate } from '../utiles/validator'


const inputReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE':
            return {
                ...state,
                value: action.val,
                isValid: validate(action.val, action.validators)
            }
        case 'BLUR': {
            return {
                ...state,
                isBlured: true
            }
        }
        default:
            return state
    }
};


const Input = props => {
    const [inputState, dispatch] = useReducer(inputReducer, {
        value: '',
        isValid: false,
        isBlured: false
    });
    const { id, onInput } = props;
    const { value, isValid } = inputState;

    useEffect(() => {
        onInput(id, value, isValid)
    }, [id, value, isValid, onInput]);

    const changeHandler = event => {
        dispatch({
            type: 'CHANGE',
            val: event.target.value,
            validators: props.validators
        })
    }
    const blurHandler = () => {
        dispatch({
            type: 'BLUR'
        })
    }

    const { label, rule, msg, type, placeholder, errorText } = props;

    return (
        <>

            <div className="form-floating form-group row mx-2">
                <label htmlFor="floatingInput">{label}</label>
                <input
                    className="form-control"
                    data-rule={rule}
                    data-msg={msg}
                    type={type}
                    id={id}
                    placeholder={placeholder}
                    onChange={changeHandler}
                    value={inputState.value}
                    onBlur={blurHandler}
                />
                {/* <div className="validate" /> */}
                {
                    !inputState.isValid &&
                    inputState.isBlured &&
                    <p className="text-danger small mt-2">{errorText}</p>
                }
            </div>
        </>
    )
}

export default Input;