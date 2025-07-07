import { AppStateType } from "./redux-store";

export const getPhoto = (state: AppStateType): string | null =>
    state.auth.photo;
export const getIsAuth = (state: AppStateType): boolean => state.auth.isAuth;
export const getLoginCurrentUser = (state: AppStateType) => state.auth.photo;
export const getLogin = (state: AppStateType) => state.auth.login;
