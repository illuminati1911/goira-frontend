export const isAuthenticated = () => {
    return document.cookie
            .split(";")
            .filter((s) => s.includes('session_token'))
            .length > 0 
}