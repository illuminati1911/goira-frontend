import React from 'react'
import styles from './layout/styles/Slider.module.css'

const Slider = (props) => {



    return (
        <div className="slidecontainer">
            <input
                className={styles.slider}
                type="range" 
                min="16" 
                max="30" 
                defaultValue={props.defaultValue} 
                onChange={props.onChange}
                data-lpignore="true" />
        </div>
    )
}

export default Slider