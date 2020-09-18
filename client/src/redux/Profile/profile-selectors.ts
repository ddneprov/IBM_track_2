import { AppStateType } from "../redux-store"

/**
 * Возвращает текущего пользователя.
 */
export const getCurrentUser = (state: AppStateType) => {
    return state.profilePage.currentUser
}

/**
 * Возвращает список пилотов.
 */
export const getPilots = (state: AppStateType) => {
    return state.profilePage.pilots
}

/**
 * Возвращает выбранного пользователя.
 */
export const getSelectedUser = (state: AppStateType) => {
    return state.profilePage.seletedUser
}

/**
 * true - если пользователь авторизован.
 */
export const isAuthorization = (state: AppStateType) => {
    return Object.keys(state.profilePage.currentUser).length !== 0
}