const authReducer = (state, action) => {
    switch(action.type) {
        case 'LOGIN_REQUEST_BEGIN':
            return{...state, isLoading: true}
        case 'LOGIN_REQUEST_SUCCESS':
            return{...state, isLoading: false, error: null}
        case 'LOGIN_REQUEST_FAILURE':
            return{...state, isLoading: false, error: 'Login failed'}
        default:
            return state
    }
}

export default authReducer