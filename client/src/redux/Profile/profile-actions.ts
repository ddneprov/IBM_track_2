import { ProfileFieldType } from './../../components/Content/Profile/components/type.d';

export const LOGOUT = 'LOGOUT'
export const SET_USER = 'SET_USER'
export const SET_PILOTS = 'GET_PILOTS'

export const logOut = () => ({ type: LOGOUT } as const)
export const setUser = (user: string) => ({ type: SET_USER, user } as const)
export const setPilots = (pilots: Array<ProfileFieldType>) => ({ type: SET_PILOTS, pilots } as const)

export const actions = {
    logOut,
    setUser,
    setPilots
}