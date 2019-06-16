import React, { useState, useContext } from 'react'

import styles from './layout/styles/Login.module.css'
import textStyles from './layout/styles/Text.module.css'
import { CTX } from '../Store'
import Button from './Button'
import InputField from './InputField';
import history from '../history'
import LoadingSpinner from './LoadingSpinner';
import { loginRequest } from '../actions/authAction';

const Login = () => {
    const [store, dispatch] = useContext(CTX)
    const [password, setPassword] = useState('')
    const login = loginRequest(dispatch)

    const callback = () => {
        login(password)
        setPassword('')
    }

    if (store.auth.isAuthenticated) {
        history.push('/ac')
    }

    return (
        <div className={styles.container}>
            <div className={styles.innercontainer}>
                <h1 className={textStyles.regular}>Login</h1>
                <InputField 
                    type="password"
                    placeholder="password"
                    stream={setPassword}
                    value={password}
                    />
                <Button action={callback} >
                        {store.auth.isLoading 
                            ? <LoadingSpinner /> 
                            : "login"
                        }
                    </Button>
            </div>
        </div>
    )
}

export default Login