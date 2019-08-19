import acReducer from '../acReducer'

test('Test default action', () => {
    const result = acReducer({}, "action")
    expect(result).toEqual({})
})

test('Test status request end', () => {
    var result = acReducer({}, {payload: 'hello', type: 'AC_STATUS_REQUEST_END'})
    expect(result).toEqual({
        local: 'hello',
        remote: 'hello'
    })

    result = acReducer({}, {payload: 'test123', type: 'AC_STATUS_REQUEST_END'})
    expect(result).toEqual({
        local: 'test123',
        remote: 'test123'
    })

    result = acReducer({'default': 123}, {payload: 'test123', type: 'AC_STATUS_REQUEST_END'})
    expect(result).toEqual({
        local: 'test123',
        remote: 'test123',
        default: 123
    })

    result = acReducer({local: 123, remote: '123'}, {payload: 'test123', type: 'AC_STATUS_REQUEST_END'})
    expect(result).toEqual({
        local: 'test123',
        remote: 'test123'
    })
})

test('Test set status request end', () => {
    var result = acReducer({}, {payload: 'hello', type: 'AC_SET_STATUS_REQUEST_END'})
    expect(result).toEqual({
        local: 'hello',
        remote: 'hello'
    })

    result = acReducer({}, {payload: 'test123', type: 'AC_SET_STATUS_REQUEST_END'})
    expect(result).toEqual({
        local: 'test123',
        remote: 'test123'
    })

    result = acReducer({'default': 123}, {payload: 'test123', type: 'AC_SET_STATUS_REQUEST_END'})
    expect(result).toEqual({
        local: 'test123',
        remote: 'test123',
        default: 123
    })

    result = acReducer({local: 123, remote: '123'}, {payload: 'test123', type: 'AC_SET_STATUS_REQUEST_END'})
    expect(result).toEqual({
        local: 'test123',
        remote: 'test123'
    })
})

test('Test set local temp', () => {
    var result = acReducer({ local: { somelocalvar: true } }, { payload: 28, type: 'AC_SET_LOCAL_TEMP' })
    expect(result).toEqual({
        local: {
            somelocalvar: true,
            temp: 28
        }
    })
    
    result = acReducer({}, {payload: 28, type: 'AC_SET_LOCAL_TEMP'})
    expect(result).toEqual({
        local: {
            temp: 28
        }
    })

    result = acReducer({ remote: 123 }, { payload: 35, type: 'AC_SET_LOCAL_TEMP' })
    expect(result).toEqual({
        remote: 123,
        local: {
            temp: 35
        }
    })
})

test('Test set local mode', () => {
    var result = acReducer({ local: { somelocalvar: true } }, { payload: 0, type: 'AC_SET_LOCAL_MODE' })
    expect(result).toEqual({
        local: {
            somelocalvar: true,
            mode: 0
        }
    })
    
    result = acReducer({}, {payload: 2, type: 'AC_SET_LOCAL_MODE'})
    expect(result).toEqual({
        local: {
            mode: 2
        }
    })

    result = acReducer({ remote: 123 }, { payload: 1, type: 'AC_SET_LOCAL_MODE' })
    expect(result).toEqual({
        remote: 123,
        local: {
            mode: 1
        }
    })
})

test('Test toggle local power', () => {
    var result = acReducer({ local: { somelocalvar: true } }, { payload: 0, type: 'AC_TOGGLE_LOCAL_POWER' })
    expect(result).toEqual({
        local: {
            active: true,
            somelocalvar: true
        }
    })

    result = acReducer({ local: { active: true } }, { payload: 0, type: 'AC_TOGGLE_LOCAL_POWER' })
    expect(result).toEqual({
        local: {
            active: false
        }
    })

    result = acReducer({ local: { active: false } }, { payload: 0, type: 'AC_TOGGLE_LOCAL_POWER' })
    expect(result).toEqual({
        local: {
            active: true
        }
    })
})