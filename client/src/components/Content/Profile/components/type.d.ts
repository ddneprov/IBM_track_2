export enum ProfileFieldLabel {
    firstName = 'Имя',
    lastName = 'Фамилия',
    patronimic = 'Отчество',
    crewRole = 'Должность',
    standingFromDate = 'Дата начала работы в компании',
    standingFromDateInRole = 'Дата заступления на текущую должность',
    reliabilityIndex = 'Индекс надежности',
    rewardsAndPunishments = 'Разность между наградами и наказаниями'
}

/**
 * Перечисление ролей
 */
export enum CrewRoleEnum {
    manager = 'КВС-инстр'
}

/**
 * Роли
 */
export type CrewRoleType = 'КВС' | 'КВС-экзаменатор' | '2П' | '2П-стажер' | 'КВС-стажер' | CrewRoleEnum.manager

export type ProfileFieldType = {
    firstName: string, // Имя
    lastName: string, // Фамилия
    patronimic: string, // Отчество
    crewRole: CrewRoleType | string, // должность
    standingFromDate: string, // Дата начала работы в компании
    standingFromDateInRole: string, // Дата заступления на текущую должность
    reliabilityIndex: int, // Индекс надежности
    rewardsAndPunishments: int // Разность между наградами и наказаниями
}

export interface IProfileField {
    [key: keyof ProfileField]: string
}