import React from 'react'
import buttonStyles from './layout/styles/Button.module.css'
import LoadingSpinner from './LoadingSpinner'

const Button = (props) => {
    return (
            <button onClick={props.action} className={buttonStyles.regular}>
                {props.title}
                {/* <LoadingSpinner /> */}
            </button>
    )
}

export default Button