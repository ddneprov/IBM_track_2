import { actions } from './profile-actions';
import { ProfileFieldType } from './../../components/Content/Profile/components/type.d';
import { config } from '../../react-app-env.d';
import { InferActionsTypes } from '../redux-store';
import pilots from "../../moc/pilots.json"

let initialState = {
    currentUser: config.getDebugEnable() ?  pilots[0] as ProfileFieldType: 
                                            {},
    selectedUser: {

    } as ProfileFieldType
}

/**
 * Редюсер для страницы пользователя.
 */
export const profileReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        default:
            return initialState
    }
}

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>