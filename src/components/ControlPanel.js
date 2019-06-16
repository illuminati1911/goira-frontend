import React, { useContext, useState } from 'react'

import styles from './layout/styles/ControlPanel.module.css'
import images from './layout/images/images'
import history from '../history'
import { CTX } from '../Store'
import Slider from './Slider';
import ControlButton from './ControlButton';
import ModeSelection from './ModeSelection';

const ControlPanel = () => {
    const [temp, setTemp] = useState(23)
    const [store] = useContext(CTX)
    
    if (!store.auth.isAuthenticated) {
        history.push('/')
    }

    const onSliderChange = e => {
        setTemp(e.target.value)
    }

    const onModeSelect = (mode) => {
        console.log(mode)
    }

    const togglePower = () => {

    }

    return (
        <div className={styles.container}>
            <img className={styles.image} src={images.fan} alt="Fan" />
            <h1 className={styles.temp}>{temp}°C</h1>
            <Slider
                defaultValue="23"
                onChange={onSliderChange}
            />
            <div className={styles.controlbuttons}>
                <ControlButton
                    image_on={images.power_on}
                    image_off={images.power_off}
                    status={true}
                    action={togglePower}
                />
                <ModeSelection 
                    mode={1}
                    selectMode={onModeSelect}
                />
            </div>
        </div>
    )
}

export default ControlPanel