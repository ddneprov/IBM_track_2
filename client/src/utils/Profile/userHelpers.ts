import { CrewRoleEnum, CrewRoleType } from './../../components/Content/Profile/components/type.d';

/**
 * Возвращает true, если пользователь является мэнэджером
 * @param userRolу роль пользователя
 */
export const isManager = (userRolу: CrewRoleType) => userRolу === CrewRoleEnum.manager