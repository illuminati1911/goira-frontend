import { errorLogin } from "../tools/errorMessages";
import { isAuthenticated } from "../tools/storage";
import history from '../history'

export const loginRequest = dispatch => async password => {
    dispatch({type: 'LOGIN_REQUEST_BEGIN'})
    const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        body: JSON.stringify({ password }),
        headers:{
            'Content-Type': 'application/json'
        }
    })
    dispatch({
        type: 'LOGIN_REQUEST_END',
        payload: {isAuthenticated: isAuthenticated(), error: errorLogin(response)}
    })
    if (response.ok) {
        history.push('/ac')
    }
}

export const checkForSession = () => {
    return {
        type: 'SET_AUTHENTICATED',
        payload: isAuthenticated()
    }
}