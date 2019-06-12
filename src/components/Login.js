import React, { useState } from 'react'

import styles from './layout/styles/Login.module.css'
import textStyles from './layout/styles/Text.module.css'

import Button from './Button'
import InputField from './InputField';

const Login = () => {
    const [password, setPassword] = useState('')
    
    const callback = () => {
        console.log(password)
    }

    return (
        <div className={styles.container}>
            <div className={styles.innercontainer}>
                <h1 className={textStyles.regular}>Login</h1>
                <InputField 
                    type="password"
                    placeholder="password"
                    stream={setPassword}
                    />
                <Button
                    title="login"
                    action={callback} />
            </div>
        </div>
    )
}

export default Login