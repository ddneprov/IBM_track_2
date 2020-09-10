export enum ProfileFieldLabel {
    firstName = 'Имя',
    secondName = 'Фамилия',
    patronymic = 'Отчество',
    role = 'Должность',
    standingFromDate = 'Дата начала работы в компании',
    standingFromDateInRole = 'Дата заступления на текущую должность',
    reliabilityIndex = 'Индекс надежности',
    rewardsAndPunishments = 'Разность между наградами и наказаниями'
}

/**
 * Перечисление ролей
 */
export enum CrewRoleEnum {
    pilot = 'ROLE_PILOT',
    manager = 'ROLE_MANAGER'
}

/**
 * Роли
 */
export type CrewRoleType = CrewRoleEnum.twoP | CrewRoleEnum.twoPintern | CrewRoleEnum.kvs | CrewRoleEnum.kvsExam | CrewRoleEnum.intern | CrewRoleEnum.manager

export type ProfileFieldType = {
    firstName: string, // Имя
    secondName: string, // Фамилия
    patronymic: string, // Отчество
    role: CrewRoleType | string, // должность
    standingFromDate: string, // Дата начала работы в компании
    standingFromDateInRole: string, // Дата заступления на текущую должность
    reliabilityIndex: int, // Индекс надежности
    rewardsAndPunishments: int // Разность между наградами и наказаниями
}