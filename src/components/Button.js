import React from 'react';


const Button = props => {
    if (props.href) {
        return (
            <a href={props.href} className={props.class}>
                {props.children}
            </a>
        )
    }
    return (
        <button
            className={props.className}
            type={props.type}
            disabled={props.disabled}
            onClick={props.onClick}
        >
            {props.children}
        </button>

    )
}

export default Button;