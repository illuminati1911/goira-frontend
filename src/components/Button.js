import React from 'react'
import buttonStyles from './layout/styles/Button.module.css'

const Button = (props) => {
    return (
        <button 
            onClick={props.action} 
            className={props.disabled ? buttonStyles.disabled : buttonStyles.regular} 
            disabled={props.disabled}>
            {props.children}
        </button>
    )
}

export default Button