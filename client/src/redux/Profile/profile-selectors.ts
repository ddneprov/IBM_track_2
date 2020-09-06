import { AppStateType } from "../redux-store"


/**
 * Возвращает текущего пользователя.
 */
export const getCurrentUser = (state: AppStateType) => {
    return state.profilePage.currentUser
}