import { endSession } from '../tools/session'

export const fetchACStatus = async dispatch => {
    //dispatch({type: 'AC_STATUS_REQUEST_BEGIN'})
    const response = await fetch('http://localhost:8080/status', {
        method: 'GET',
        mode: 'cors',
        credentials: 'include'
    })
    const data = await response.json()

    console.log(data)

    if (response.status === 401) {
        endSession()
        return
    }
    dispatch({type: 'AC_STATUS_REQUEST_END', payload: data })
} 

export const setACStatus = dispatch => async state => {
    //dispatch({type: 'AC_STATUS_REQUEST_BEGIN'})
    const response = await fetch('http://localhost:8080/state', {
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        body: JSON.stringify(state),
        headers:{
            'Content-Type': 'application/json'
        }
    })
    const data = await response.json()

    console.log(data)

    if (response.status === 401) {
        endSession()
        return
    }
    dispatch({type: 'AC_SET_STATUS_REQUEST_END', payload: data })
} 

export const setTemp = (temp) => {
    return {
        type: 'AC_SET_LOCAL_TEMP',
        payload: parseInt(temp)
    }
}

export const setMode = (mode) => {
    return {
        type: 'AC_SET_LOCAL_MODE',
        payload: parseInt(mode)
    }
}

export const togglePower = () => {
    return {
        type: 'AC_TOGGLE_LOCAL_POWER'
    }
}