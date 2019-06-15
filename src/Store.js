import React from 'react'
import reducers, { defaultState } from './reducers/rootReducer'

const CTX = React.createContext()

export { CTX }

export default (props) => {
    const stateHook = React.useReducer(reducers, defaultState)

    return (
        <CTX.Provider value={stateHook}>
            {props.children}
        </CTX.Provider>
    )
}