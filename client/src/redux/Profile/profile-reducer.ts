import { BaseThunkType } from './../redux-store';
import { actions, LOGOUT, SET_USER } from './profile-actions';
import { ProfileFieldType } from './../../components/Content/Profile/components/type.d';
import { config } from '../../react-app-env.d';
import { InferActionsTypes } from '../redux-store';

import cookie from 'react-cookies'
import jwt from 'jwt-decode'

import pilots from "../../moc/pilots.json"

const defaultUserObject = {}

let initialState = {
    currentUser: config.getDebugEnable() ? pilots[0] as ProfileFieldType :
                                            defaultUserObject
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

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType>