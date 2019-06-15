import React, { useContext, useEffect } from 'react'
import styles from './layout/styles/App.module.css'
import Login from './Login'
import { CTX } from '../Store'
import { checkForSession } from '../actions/authAction';

const App = () => {
    const [store, dispatch] = useContext(CTX)
    const readSession = () => dispatch(checkForSession())

    useEffect(() => {
        readSession()
    }, [store.auth.isAuthenticated])
    
    return (
        <div className={styles.container}>
            <Login />
            { store.auth.isAuthenticated ? "YES" : "NOT" }
        </div>
    )
}

export default App