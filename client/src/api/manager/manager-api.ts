import { managerHeaders } from './manager-type.d';
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
        let headers: managerHeaders = { Authorization: `Bearer_${token}` }

        return instance.post(`${this.controllerName}/${this.endpoints.getAllPilots}`,
                            {},
                            {
                                headers: headers
                            })
                        .then(res => res.data)
                        .catch(error => error)
    }
}