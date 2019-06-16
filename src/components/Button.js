import React from 'react'
import buttonStyles from './layout/styles/Button.module.css'

const Button = (props) => {
    return (
        <button onClick={props.action} className={buttonStyles.regular}>
            {props.children}
        </button>
    )
}

export default Button