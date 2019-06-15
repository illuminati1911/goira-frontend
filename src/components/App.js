import React from 'react'
import Store from '../Store'
import styles from './layout/styles/App.module.css'
import Login from './Login'

const App = () => {
    return (
        <Store>
            <div className={styles.container}>
                <Login />
            </div>
        </Store>
    )
}

export default App