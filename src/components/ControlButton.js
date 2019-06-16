import React from 'react'
import buttonStyles from './layout/styles/Button.module.css'

const ControlButton = (props) => {

    const style = props.status ? buttonStyles.round_on : buttonStyles.round_off
    const image = props.status ? props.image_on : props.image_off

    return (
        <button onClick={props.action} className={style}>
            <img src={image} alt="Power" className={buttonStyles.roundimage} />
        </button>
    )
}

export default ControlButton