import { ProfileFieldType } from "../../components/Content/Profile/components/type"
import { CharapterSeniority } from "./type"
import { Seniority_Color } from "../../base/types/ColorBase"

/**
 * Максимальное значение характеристики
 */
const maxCharacterValue: number = 5

/**
 * Точность вычислений показателей сеньёрити
 */
const accuracy: number = 1


/**
 * Возвращает опыт работы.
 * @param standingFromDate Дата начала работы в компании 
 */
const getDiffDate = (dateFrom: string, dateTo: number) => {
    const expDate = dateTo - Date.parse(dateFrom)
    return expDate / (
        1000 * // seconds
        60 * // minute
        60 *// hour
        24 * // day
        365 // year
    )
}

/**
 * Возвращает конвертированное значение характеристики с ограничением.
 * @param character значение характеристики.
 */
const convertCharacteristic = (character: number) => character >= maxCharacterValue ? maxCharacterValue :
                                                                                      Number(character.toFixed(accuracy))

/**
 * Возвращает характеристики пилота.
 * @param pilot объект с данными пилота.
 */
export const getCharacteristic = (pilot: ProfileFieldType) => {
    const expYear = getDiffDate(pilot.standingFromDate, Date.now())
    const length = getDiffDate(pilot.standingFromDateInRole, Date.now())

    return [
        {
            name: 'EXP', star: convertCharacteristic(expYear), // Опыт работы
        },
        {
            name: 'LEN', star: convertCharacteristic(length) // Опыт работы в текущей должности
        },
        {
            name: 'LVL', star: convertCharacteristic(expYear + length) // Уровень доступа
        },
        {
            name: 'Q', star: convertCharacteristic(pilot.reliabilityIndex) // Качество выполнение своих обязаностей
        },
        {
            name: 'R/P', star: convertCharacteristic(pilot.rewardsAndPunishments) // Разность между кол-вом удовл. заявок и не удовл.
        }
    ] as Array<CharapterSeniority>
}

/**
 * Возвращает итоговое значение сеньёрити.
 * @param charapters массив характеристик пилота.
 */
export const getSeniorityResult = (charapters: Array<CharapterSeniority>) => {
    let result = 0

    charapters.forEach(charapter => {
        result += charapter.star
    })

    return convertCharacteristic(result / charapters.length)
}

/**
 * Возвращает цвет, соответствующий сеньёрити
 * @param seniority значение сеньёрити
 */
export const getColorBySeniority = (seniority: number): string => {
    if (seniority === 5)
        return Seniority_Color.green
    else if (seniority >= 4) {
        return Seniority_Color.yellow
    }
    else if (seniority >= 3) {
        return Seniority_Color.orange
    }
    else if (seniority >= 2) {
        return Seniority_Color.red
    }
    else
        return Seniority_Color.black
}