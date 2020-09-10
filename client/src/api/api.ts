import axios from "axios";

/**
 * Баззовое представление объекта для совершения запросов.
 */
export const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://130.193.38.154:1337/api/v1',
    headers: {
        'crossDomain': true,
        'Content-Type': true,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow': '*',
        'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
    }
})