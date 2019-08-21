import React from 'react'
import fieldStyles from './layout/styles/Field.module.css'

const InputField = (props) => {
    return (
        <input 
            className={props.darkmode ? fieldStyles.regulardark : fieldStyles.regularlight} 
            type={props.type} 
            value={props.value}
            placeholder={props.placeholder} 
            onChange={e => props.stream(e.target.value)} />
    )
}

export default InputField