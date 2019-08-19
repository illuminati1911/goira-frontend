import authReducer from '../authReducer'

test('Test login request begin', () => {
    const result = authReducer({}, { type: 'LOGIN_REQUEST_BEGIN' })
    expect(result).toEqual({
        isLoading: true
    })
})

test('Test login request end', () => {
    var result = authReducer({}, { payload: { isAuthenticated: true, error: null }, type: 'LOGIN_REQUEST_END' })
    expect(result).toEqual({
        isLoading: false,
        isAuthenticated: true,
        error: null
    })

    result = authReducer({}, { payload: { isAuthenticated: false, error: "could not login" }, type: 'LOGIN_REQUEST_END' })
    expect(result).toEqual({
        isLoading: false,
        isAuthenticated: false,
        error: "could not login"
    })

    result = authReducer({}, { payload: {}, type: 'LOGIN_REQUEST_END' })
    expect(result).toEqual({
        isLoading: false,
        isAuthenticated: undefined,
        error: undefined
    })
})

test('Test set authenticated', () => {
    var result = authReducer({}, { payload: true, type: 'SET_AUTHENTICATED' })
    expect(result).toEqual({
        isAuthenticated: true
    })
    
    result = authReducer({}, { payload: false, type: 'SET_AUTHENTICATED' })
    expect(result).toEqual({
        isAuthenticated: false
    })

    result = authReducer({}, { type: 'SET_AUTHENTICATED' })
    expect(result).toEqual({
        isAuthenticated: undefined
    })
})