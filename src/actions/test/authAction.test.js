import { loginRequest, checkForSession } from "../authAction";
import mockFetch from "./mockFetch";

test('Test login', () => {
    let i = 0
    const mockResponse = { data: {}, status: 200 }
    const dispatch = (obj) => {
        if (i > 0) {
            expect(obj.type).toEqual('LOGIN_REQUEST_END')
            expect(obj.payload).toEqual({
                isAuthenticated: false,
                error: 'Login attempt failed'
            })
        } else {
            expect(obj.type).toEqual('LOGIN_REQUEST_BEGIN')
            expect(obj.payload).toEqual(undefined)
        }
        i++
    }
    loginRequest(dispatch, mockFetch(mockResponse))("mock_password")
})

test('Test check for session', () => {
    expect(checkForSession()).toEqual({
        type: 'SET_AUTHENTICATED',
        payload: false
    })
})