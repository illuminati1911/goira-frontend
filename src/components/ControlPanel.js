import React, { useContext, useState } from 'react'

import styles from './layout/styles/ControlPanel.module.css'
import fan from './layout/images/fan.png'
import power from './layout/images/power_white.svg'
import history from '../history'
import { CTX } from '../Store'
import Slider from './Slider';
import ControlButton from './ControlButton';

const ControlPanel = () => {
    const [temp, setTemp] = useState(23)
    const [store] = useContext(CTX)
    
    if (!store.auth.isAuthenticated) {
        history.push('/')
    }

    const onSliderChange = e => {
        setTemp(e.target.value)
    }

    return (
        <div className={styles.container}>
            <img className={styles.image} src={fan} alt="Fan" />
            <h1 className={styles.temp}>{temp}°C</h1>
            <Slider
                defaultValue="23"
                onChange={onSliderChange}
            />
            <div className={styles.controlbuttons}>
                <ControlButton
                    image={power}
                />
                <ControlButton
                    image={power}
                />
                <ControlButton
                    image={power}
                />
                <ControlButton
                    image={power}
                />
            </div>
        </div>
    )
}

export default ControlPanel