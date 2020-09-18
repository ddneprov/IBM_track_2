import { ProfileFieldType } from './../../components/Content/Profile/components/type.d';

export const LOGOUT = 'LOGOUT'
export const SET_USER = 'SET_USER'
export const SET_PILOTS = 'GET_PILOTS'
export const SET_SELECTED_USER = 'SET_SELECTED_USER'

export const logOut = () => ({ type: LOGOUT } as const)
export const setUser = (user: string) => ({ type: SET_USER, user } as const)
export const setSelectedUser = (userLogin: string) => ({ type: SET_SELECTED_USER, userLogin } as const)
export const setPilots = (pilots: Array<ProfileFieldType>) => ({ type: SET_PILOTS, pilots } as const)

export const actions = {
    logOut,
    setUser,
    setSelectedUser,
    setPilots
}