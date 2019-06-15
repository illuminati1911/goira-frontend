import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import Store from './Store'

ReactDOM.render(
    <Store>
        <App />
    </Store>,
    document.querySelector('#root')
)