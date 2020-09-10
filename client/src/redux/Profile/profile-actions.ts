export const LOGOUT = 'LOGOUT'
export const SET_USER = 'SET_USER'

export const logOut = () => ({type: LOGOUT} as const)
export const setUser = (user: string) => ({type: SET_USER, user})

export const actions = {
    logOut,
    setUser
}