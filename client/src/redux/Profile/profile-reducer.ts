import { managerAPI } from './../../api/manager/manager-api';
import { BaseThunkType } from './../redux-store';
import { actions, LOGOUT, SET_USER, SET_PILOTS } from './profile-actions';
import { ProfileFieldType } from './../../components/Content/Profile/components/type.d';
import { config } from '../../react-app-env.d';
import { InferActionsTypes } from '../redux-store';

import cookie from 'react-cookies'
import jwt from 'jwt-decode'
import { isError } from 'util';

const defaultUserObject = {}

let initialState = {
    currentUser: config.getDebugEnable() ? (require("../../moc/pilots.json") as Array<ProfileFieldType>)[0] as ProfileFieldType :
                                            defaultUserObject,
    pilots: config.getDebugEnable() ? require("../../moc/pilots.json") as Array<ProfileFieldType> : new Array<ProfileFieldType>()
}

/**
 * Редюсер для страницы пользователя.
 */
export const profileReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case LOGOUT: {
            cookie.remove("user")
            return {
                ...state,
                currentUser: defaultUserObject
            }
        }
        case SET_USER: {
            const user = jwt(action.user) as ProfileFieldType
            cookie.save('user', action.user, { path: '/' });  
            return {
                ...state,
                currentUser: user
            }
        }
        case SET_PILOTS: {
            return {
                ...state,
                pilots: action.pilots
            }
        }
        default:
            if (cookie.load("user")) {
                let token = cookie.load("user") as string
                let user = jwt(token) as ProfileFieldType
                return {
                    ...state,
                    currentUser: user
                }
            }
            
            return initialState
    }
}

/**
 * Запрос на получения списка пилотов. 
 */
export const requestPilots = (): ThunkType => {
    return async (dispatch, getState) => {
        let data = await managerAPI.getAllPilots()
        console.log('response: ', data)

        if (!isError(data)) {
            dispatch(actions.setPilots(data))
        }
    }
}

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType>