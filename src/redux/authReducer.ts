import { ResultCodeForCaptcha } from "./../api/api";
import { FormAction, stopSubmit } from "redux-form";
import userPhoto from ".././assets/images/user.png";
import {
    AuthAPI,
    MeResponseType,
    ProfileAPI,
    ResultCodesEnum,
    SecurityAPI,
} from "../api/api";
import { ThunkAction } from "redux-thunk";
import { AppStateType } from "./redux-store";

const SET_USER_DATE = "auth/SET_USER_DATE";
const SET_PHOTO_PROFILE = "auth/SET_PHOTO_PROFILE";
const TOGGLE_IS_FETCHING = "auth/TOGGLE_IS_FETCHING";
const SET_CAPTCHA_URL = "auth/SET_CAPTCHA_URL";

export type InitializedStateType = typeof initialState;
const initialState = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    photo: null as string | null,
    isAuth: false as boolean,
    logData: null as string | null,
    captchaUrl: null as string | null,
};
type ActionsTypes =
    | {
          type: typeof SET_USER_DATE;
          payload: {
              id: number | null;
              email: string | null;
              login: string | null;
              photo?: string | null;
              isAuth: boolean;
              logData?: string | null;
              captchaUrl?: string | null;
          };
      }
    | {
          type: typeof TOGGLE_IS_FETCHING;
          isAuth: boolean;
      }
    | { type: typeof SET_CAPTCHA_URL; captchaUrl: string | null }
    | { type: typeof SET_PHOTO_PROFILE; photo: string };
const authReducer = (
    state = initialState,
    action: ActionsTypes
): InitializedStateType => {
    switch (action.type) {
        case SET_USER_DATE:
            return {
                ...state,
                ...action.payload,
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isAuth: action.isAuth,
            };
        case SET_CAPTCHA_URL:
            return {
                ...state,
                captchaUrl: action.captchaUrl,
            };
        case SET_PHOTO_PROFILE:
            return {
                ...state,
                photo: action.photo,
            };
        default:
            return { ...state };
    }
};

export const toggleIsFetching = (isAuth: boolean): ActionsTypes => ({
    type: TOGGLE_IS_FETCHING,
    isAuth,
});

export const setAuthUserDate = (
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
): ActionsTypes => ({
    type: SET_USER_DATE,
    payload: {
        id,
        email,
        login,
        isAuth,
    },
});

export const setPhotoProfile = (photo: string): ActionsTypes => ({
    type: SET_PHOTO_PROFILE,
    photo,
});

const setCaptchaUrl = (captchaUrl: string | null): ActionsTypes => ({
    type: SET_CAPTCHA_URL,
    captchaUrl,
});

type ThunkType = ThunkAction<Promise<any>, AppStateType, unknown, ActionsTypes>;
export const getAuthUserData = (): ThunkType => async (dispatch) => {
    let meData = await AuthAPI.getAuthMe();
    if (meData.resultCode === ResultCodesEnum.Success) {
        const { id, email, login } = meData.data;
        dispatch(setAuthUserDate(id, email, login, true));
        dispatch(toggleIsFetching(true));
        let data: any = await ProfileAPI.getProfileId(id);

        dispatch(setPhotoProfile(data.photos ? data.photos.small : userPhoto));
        return meData.data;
    }
};
export const logMe =  
    (email: string, password: string, rememberMe: boolean, captcha: any) =>
    async (dispatch: any) => {
        let loginData = await AuthAPI.logMe(
            email,
            password,
            rememberMe,
            captcha
        );
        if (loginData.resultCode == ResultCodesEnum.Success) {
            dispatch(getAuthUserData());
        } else {
            if (loginData.resultCode == ResultCodeForCaptcha.CaptchaIsRequired)
                dispatch(getCaptchaUrl());
            let message =
                loginData.messages.length > 0
                    ? loginData.messages[0]
                    : "Common error";

            setTimeout(
                () =>
                    dispatch(
                        stopSubmit("login", {
                            _error: message,
                        })
                    ),
                500
            );
        }
    };
export const logOutMe = (): ThunkType => async (dispatch) => {
    let response = await AuthAPI.logOutMe();
    if (response.resultCode == ResultCodesEnum.Success) {
        dispatch(setAuthUserDate(null, null, null, false));
        dispatch(toggleIsFetching(false));
    }
};
const getCaptchaUrl = () => async (dispatch: any) => {
    const captchaResponse = await SecurityAPI.getCaptchaUrl();
    const captchaUrl = captchaResponse.data.url;

    dispatch(setCaptchaUrl(captchaUrl));
};

export default authReducer;
