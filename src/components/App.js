import React from 'react'
import styles from './layout/styles/App.module.css'
import Login from './Login'
import LoadingSpinner from './LoadingSpinner'

const App = () => {
    return (
        <div className={styles.container}>
            <Login />
        </div>
    )
}

export default App