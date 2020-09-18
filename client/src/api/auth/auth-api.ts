import { instance } from '../api';
import { UserAuth } from './auth-type';

/**
 * API для авторизации пользователя.
 */
export const authAPI = {
    controllerName: 'auth/login',

    /**
     * Аворизация пользователя.
     * @param user Данные пользователя.
     */
    logIn(user: UserAuth) {
        return instance.post(this.controllerName, user)
                       .then(res => res.data)
                       .catch(error => error)
    }
}