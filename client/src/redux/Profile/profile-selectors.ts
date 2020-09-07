import { AppStateType } from "../redux-store"


/**
 * Возвращает текущего пользователя.
 */
export const getCurrentUser = (state: AppStateType) => {
    return state.profilePage.currentUser
}

/**
 * true - если пользователь авторизован.
 */
export const isAuthorization = (state: AppStateType) => {
    return Object.keys(state.profilePage.currentUser).length !== 0
}