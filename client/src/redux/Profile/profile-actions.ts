export const LOGOUT = 'LOGOUT'

export const logOut = () => ({type: LOGOUT} as const)

export const actions = {
    logOut
}