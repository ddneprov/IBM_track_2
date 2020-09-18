import { instance } from '../api';
import cookie from 'react-cookies';

/**
 * API для менеджера.
 */
export const managerAPI = {
    controllerName: 'manager',

    endpoints: {
        getAllPilots: 'getAllPilots'
    },

    /**
     * Получение списка всех пилотов.
     */
    getAllPilots() {
        cookie.load("user")
        const token = cookie.load("user") as string

        return instance.post(`${this.controllerName}/${this.endpoints.getAllPilots}?Authorization=Bearer_${token}`)
            .then(res => res.data)
            .catch(error => error)
    }
}