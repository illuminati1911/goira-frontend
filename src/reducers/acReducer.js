const acReducer = (state, action) => {
    switch(action.type) {
        case 'AC_STATUS_REQUEST_END':
        case 'AC_SET_STATUS_REQUEST_END':
            return {...state, local: action.payload, remote: action.payload}
        case 'AC_SET_LOCAL_TEMP':
            return {...state, local: {...state.local, temp: action.payload}}
        case 'AC_SET_LOCAL_MODE':
            return {...state, local: {...state.local, mode: action.payload}}
        case 'AC_TOGGLE_LOCAL_POWER':
            return {...state, local: {...state.local, active: !state.local.active}}            
        default:
            return state
    }
}

export default acReducer