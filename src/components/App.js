import React, { useContext, useEffect } from 'react'
import { Router, Route, Switch } from 'react-router-dom'

import styles from './layout/styles/App.module.css'
import history from '../history'
import Login from './Login'
import { CTX } from '../Store'
import { checkForSession } from '../actions/authAction';
import ControlPanel from './ControlPanel';
import { toggleUIMode } from '../actions/settingsAction'

const App = (props) => {
    const [store, dispatch] = useContext(CTX)
    const readSession = () => dispatch(checkForSession())

    useEffect(() => {
        readSession()
    }, [store.auth.isAuthenticated])

    const onBrightnessModeSelect = () => {
        dispatch(toggleUIMode())
    }
    
    return (
        <div className={store.settings.darkmode ? styles.containerdark : styles.containerlight}>
            <button className={styles.brightness} onClick={onBrightnessModeSelect} />
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Login} />
                    <Route path="/ac" exact component={ControlPanel} />
                </Switch>
            </Router>
        </div>
    )
}

export default App