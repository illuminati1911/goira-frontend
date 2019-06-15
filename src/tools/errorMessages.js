export const errorLogin = (response) => {
    if (response.ok) {
        return null
    } else if (response.status === 401) {
        return 'Invalid password'
    }
    return 'Login attempt failed'
}