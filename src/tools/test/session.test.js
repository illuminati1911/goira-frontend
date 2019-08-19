import { isAuthenticated, endSession } from "../session";

const deleteCookies = () => {
    Object.defineProperty(window.document, 'cookie', {
        writable: true,
        value: ''
    })
}

beforeAll(() => {
    Object.defineProperty(window.document, 'cookie', {
        writable: true,
        value: 'session_token=;'
    })
})

test('Test isAuthenticated', () => {
    expect(isAuthenticated()).toEqual(true)
    deleteCookies()
    expect(isAuthenticated()).toEqual(false)
})

test('Test endSession', () => {
    endSession()
    expect(document.cookie).toEqual('session_token=; expires=Thu, 01 Jan 1970 00:00:01 GMT;')
})