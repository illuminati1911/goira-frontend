import React from 'react'
import buttonStyles from './layout/styles/Button.module.css'

const ControlButton = (props) => {
    return (
        <button onClick={props.action} className={buttonStyles.round}>
            <img src={props.image} alt="Power" className={buttonStyles.roundimage} />
        </button>
    )
}

export default ControlButton