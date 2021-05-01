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
        <div className="text-center">
            <button
                className={props.className}
                type={props.type}
                disabled={props.disabled}
                onClick={props.onClick}
            >
                {props.children}
            </button>
        </div>
    )
}

export default Button;