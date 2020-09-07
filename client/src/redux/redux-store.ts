import { profileReducer } from './Profile/profile-reducer';
import { combineReducers, createStore} from "redux";

let rootReducer = combineReducers({
    profilePage: profileReducer,
})

type RootReducerType = typeof rootReducer; // (globalstate: AppStateType) => AppStateType
export type AppStateType = ReturnType<RootReducerType>

export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never

export const store = createStore(rootReducer)
// @ts-ignore
window.__store__ = store
