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
    const [inputState, dispatch] = useReducer(inputReducer , {
        value: '',
        isValid: false,
        isBlured: false
    })
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


    return (
        <div className="form-floating">
            <label htmlFor="floatingInput">{props.label}</label>
            <input
                className="form-control"
                type={props.type}
                id={props.id}
                placeholder={props.placeholder}
                onChange={changeHandler}
                value={inputState.value}
                onBlur={blurHandler}
            />
            {
                !inputState.isValid &&
                inputState.isBlured &&
                <p className="text-danger small mt-2">{props.errorText}</p>
            }
        </div>

    )
}

export default Input;