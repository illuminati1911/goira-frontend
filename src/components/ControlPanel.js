import React, { useContext, useEffect } from 'react'
import _ from 'lodash'

import styles from './layout/styles/ControlPanel.module.css'
import images from './layout/images/images'
import history from '../history'
import { CTX } from '../Store'
import Slider from './Slider';
import Button from './Button'
import ControlButton from './ControlButton';
import ModeSelection from './ModeSelection';
import { fetchACStatus, setACStatus, setTemp, setMode, togglePower } from '../actions/acAction'

const ControlPanel = () => {
    const [store, dispatch] = useContext(CTX)
    const client = fetch

    if (!store.auth.isAuthenticated) {
        history.push('/')
    }

    useEffect(() => {
        fetchACStatus(dispatch, client)
    }, [])

    const onSliderChange = e => {
        dispatch(setTemp(e.target.value))
    }

    const onModeSelect = (mode) => {
        dispatch(setMode(mode))
    }

    const onPowerChange = () => {
        dispatch(togglePower())
    }

    const onTransmit = () => {
        setACStatus(dispatch, client)(store.ac.local)
    }

    if (store.ac.remote === null) {
        return <div>Please wait...</div>
    }

    const isLocalStateChanged = !_.isEqual(store.ac.local, store.ac.remote)
    const propeller = store.ac.local.active ? styles.imageanim : styles.image
    
    return (
        <div className={styles.container}>
            <div className={styles.imagecontainer}>
                <img className={propeller} src={images.fan_white} alt="Fan" />
            </div>
            <h1 className={styles.temp}>{store.ac.local.temp}°C</h1>
            <Slider
                defaultValue={store.ac.local.temp}
                onChange={onSliderChange}
            />
            <div className={styles.controlbuttons}>
                <ControlButton
                    image_on={images.power_on}
                    image_off={images.power_off}
                    status={store.ac.local.active}
                    action={onPowerChange}
                />
                <ModeSelection 
                    mode={store.ac.local.mode}
                    selectMode={onModeSelect}
                />
            </div>
            <div className={styles.transmit}>
                <Button 
                    action={onTransmit} 
                    disabled={!isLocalStateChanged} >
                        Transmit
                </Button>
            </div> 
        </div>
    )
}

export default ControlPanel