/*export const loginRequest = () => {
    return {
        type: 'LOGIN_REQUEST_BEGIN'
    }
}*/

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
    if (!response.ok) {
        dispatch({type: 'LOGIN_REQUEST_FAILURE'})
        return
    }
    dispatch({type: 'LOGIN_REQUEST_SUCCESS'})
}