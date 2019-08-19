import rootReducer from '../rootReducer'

test('Test auth', () => {
    const result = rootReducer({}, { type: 'LOGIN_REQUEST_BEGIN' })
    expect(result).toEqual({
        ac: undefined,
        auth: {
            isLoading: true
        }
    })
})

test('Test ac', () => {
    const result = rootReducer({}, {payload: 'hello', type: 'AC_STATUS_REQUEST_END'})
    expect(result).toEqual({
        ac: {
            local: 'hello',
            remote: 'hello'
        },
        auth: undefined
    })
})

test('Test auth and ac', () => {
    const result = rootReducer({}, {payload: 'hello', type: 'AC_STATUS_REQUEST_END'})
    const result2 = rootReducer(result, { type: 'LOGIN_REQUEST_BEGIN' })
    expect(result2).toEqual({
        ac: {
            local: 'hello',
            remote: 'hello'
        },
        auth: {
            isLoading: true
        }
    })
})