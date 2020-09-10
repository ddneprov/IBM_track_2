import axios from "axios";

/**
 * Баззовое представление объекта для совершения запросов.
 */
export const instance = axios.create({
    baseURL: 'http://130.193.38.154:1337/api/v1'
})