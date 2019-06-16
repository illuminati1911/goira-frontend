import React, { useContext, useState } from 'react'
import images from './layout/images/images'
import ControlButton from './ControlButton';

const ModeSelection = (props) => {
    return(
        <>
            <ControlButton
                image_on={images.ice_on}
                image_off={images.ice_off}
                status={props.mode === 1}
                action={() => props.selectMode(1)}
            />
            <ControlButton
                image_on={images.sun_on}
                image_off={images.sun_off}
                status={props.mode === 2}
                action={() => props.selectMode(2)}
            />
            <ControlButton
                image_on={images.drop_on}
                image_off={images.drop_off}
                status={props.mode === 3}
                action={() => props.selectMode(3)}
            />
        </>
    )
}

export default ModeSelection