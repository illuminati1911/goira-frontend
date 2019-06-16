import history from '../history'

export const isAuthenticated = () => {
    return document.cookie
            .split(";")
            .filter((s) => s.includes('session_token'))
            .length > 0 
}

export const endSession = () => {
    document.cookie = 'session_token=; expires=Thu, 01 Jan 1970 00:00:01 GMT;'
    history.push('/')
}