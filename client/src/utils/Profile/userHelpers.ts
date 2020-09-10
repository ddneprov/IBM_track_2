import jwt from 'jwt-decode';
import { CrewRoleEnum, CrewRoleType, ProfileFieldType } from './../../components/Content/Profile/components/type.d';
import cookie from 'react-cookies'


/**
 * Возвращает true, если пользователь является мэнэджером
 * @param userRolу роль пользователя
 */
export const isManager = (userRolу: CrewRoleType) => userRolу === CrewRoleEnum.manager

/**
 * Возвращает true, если пользователь является мэнэджером исходя из jwt лежащий в cookie
 */
export const isUserManager = () => {
    let user_jwt = cookie.load("user")
    if (user_jwt) {
        let user = jwt(user_jwt) as ProfileFieldType
        if (user.role === CrewRoleEnum.manager) {
            return true;
        }
    }

    return false;
}