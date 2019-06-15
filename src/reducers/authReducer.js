const authReducer = (state, action) => {
    switch(action.type) {
        case 'LOGIN_REQUEST_BEGIN':
            return {...state, isLoading: true}
        case 'LOGIN_REQUEST_END':
            const {isAuthenticated, error} = action.payload
            return {
                ...state,
                isLoading: false,
                isAuthenticated,
                error
            }
        case 'SET_AUTHENTICATED':
            return {...state, isAuthenticated: action.payload}
        default:
            return state
    }
}

export default authReducer