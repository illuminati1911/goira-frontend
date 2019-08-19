import { fetchACStatus, setACStatus, setTemp, setMode, togglePower,  } from "../acAction";
import mockFetch from './mockFetch'

test('Test mock', () => {
    
    mockFetch({ data: { hello: 5 }, status: 200 })('dsaads', {}).then( result =>
        result.json().then(
            res2 => expect(res2.hello).toEqual(5)
        )
    )
    expect(false).toEqual(false)
})

test('Test fetch ac status', () => {
    const mockResponse = { data: { hello: 5 }, status: 200 }
    const dispatch = (obj) => {
        expect(obj.type).toEqual('AC_STATUS_REQUEST_END')
        expect(obj.payload).toEqual(mockResponse.data)
    }
    fetchACStatus(dispatch, mockFetch(mockResponse))
})

test('Test set ac status', () => {
    const mockResponse = { data: { hello: 5 }, status: 200 }
    const dispatch = (obj) => {
        expect(obj.type).toEqual('AC_SET_STATUS_REQUEST_END')
        expect(obj.payload).toEqual(mockResponse.data)
    }
    setACStatus(dispatch, mockFetch(mockResponse))({})
})

test('Test set temp', () => {
    expect(setTemp('23')).toEqual({
        type: 'AC_SET_LOCAL_TEMP',
        payload: 23
    })

    expect(setTemp(44)).toEqual({
        type: 'AC_SET_LOCAL_TEMP',
        payload: 44
    })

    expect(setTemp()).toEqual({
        type: 'AC_SET_LOCAL_TEMP',
        payload: NaN
    })
})

test('Test set mode', () => {
    expect(setMode('23')).toEqual({
        type: 'AC_SET_LOCAL_MODE',
        payload: 23
    })

    expect(setMode(44)).toEqual({
        type: 'AC_SET_LOCAL_MODE',
        payload: 44
    })

    expect(setMode()).toEqual({
        type: 'AC_SET_LOCAL_MODE',
        payload: NaN
    })
})

test('Test toggle power', () => {
    expect(togglePower()).toEqual({
        type: 'AC_TOGGLE_LOCAL_POWER'
    })
})
