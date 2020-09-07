import { ProfileFieldType } from "../../components/Content/Profile/components/type"
import { CharapterSeniority } from "./type"
import { IBM_Default_Color } from "../../base/types/ColorBase"

/**
 * Максимальное значение характеристики
 */
const maxCharacterValue = 5

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
                                                                                      character

/**
 * Возвращает характеристики пилота.
 * @param pilot объект с данными пилота.
 */
export const getCharacteristic = (pilot: ProfileFieldType) => {
    const expYear = getDiffDate(pilot.standingFromDate, Date.now())
    const length = getDiffDate(pilot.standingFromDateInRole, Date.now())

    return [
        {
            name: 'Experience', star: convertCharacteristic(expYear),
        },
        {
            name: 'Length', star: convertCharacteristic(length)
        },
        {
            name: 'Clearance level', star: convertCharacteristic(expYear + length)
        },
        {
            name: 'Quality', star: convertCharacteristic(pilot.reliabilityIndex)
        },
        {
            name: 'R/P', star: convertCharacteristic(pilot.rewardsAndPunishments)
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

    return convertCharacteristic(result / charapters.length).toFixed(1)
}

/**
 * Возвращает цвет, соответствующий сеньёрити
 * @param seniority значение сеньёрити
 */
export const getColorBySeniority = (seniority: number): string => {
    if (seniority === 5)
        return IBM_Default_Color.green
    else if (seniority >= 4) {
        return IBM_Default_Color.yellow
    }
    else if (seniority >= 3) {
        return IBM_Default_Color.orange
    }
    else if (seniority >= 2) {
        return IBM_Default_Color.red
    }
    else
        return IBM_Default_Color.black
}