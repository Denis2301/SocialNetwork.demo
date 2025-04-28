import { stopSubmit } from "redux-form";
import userPhoto from ".././assets/images/user.png";
import { AuthAPI, ProfileAPI, SecurityAPI } from "../api/api";

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
type ActionCreatorType =
    | {
          type: typeof SET_USER_DATE;
          payload: {
              id: number | null;
              email: string | null;
              login: string | null;
              photo: string | null;
              isAuth: boolean;
              logData: string | null;
              captchaUrl: string | null;
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
    action: ActionCreatorType
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

type ToggleIsFetching = {
    type: typeof TOGGLE_IS_FETCHING;
    isAuth: boolean;
};
export const toggleIsFetching = (isAuth: boolean): ToggleIsFetching => ({
    type: TOGGLE_IS_FETCHING,
    isAuth,
});

type SetAuthUserDateActionPayloadType = {
    id: number | null;
    email: string | null;
    login: string | null;
    isAuth: boolean;
};
type SetAuthUserDateActionType = {
    type: typeof SET_USER_DATE;
    payload: SetAuthUserDateActionPayloadType;
};
export const setAuthUserDate = (
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
): SetAuthUserDateActionType => ({
    type: SET_USER_DATE,
    payload: {
        id,
        email,
        login,
        isAuth,
    },
});

type SetPhotoProfileType = {
    type: typeof SET_PHOTO_PROFILE;
    photo: string | null;
};
export const setPhotoProfile = (photo: string): SetPhotoProfileType => ({
    type: SET_PHOTO_PROFILE,
    photo,
});

type SetCaptchaUrlActionType = {
    type: typeof SET_CAPTCHA_URL;
    payload: { captchaUrl: string | null };
};
const setCaptchaUrl = (captchaUrl: string | null): SetCaptchaUrlActionType => ({
    type: SET_CAPTCHA_URL,
    payload: { captchaUrl },
});

export const getAuthUserData = () => async (dispatch: any) => {
    let response = await AuthAPI.getAuthMe();
    if (response.data.resultCode === 0) {
        const { id, email, login } = response.data.data;
        dispatch(setAuthUserDate(id, email, login, true));
        dispatch(toggleIsFetching(true));
        let data: any = await ProfileAPI.getProfileId(id);

        dispatch(setPhotoProfile(data.photos ? data.photos.small : userPhoto));
        return response.data;
    }
};
export const logMe =
    (email: string, password: string, rememberMe: boolean, captcha: any) =>
    async (dispatch: any) => {
        let response = await AuthAPI.logMe(
            email,
            password,
            rememberMe,
            captcha
        );
        if (response.data.resultCode == 0) {
            dispatch(getAuthUserData());
        } else {
            if (response.data.resultCode == 10) dispatch(getCaptchaUrl());
            let message =
                response.data.messages.length > 0
                    ? response.data.messages[0]
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
export const logOutMe = () => async (dispatch: any) => {
    let response = await AuthAPI.logOutMe();
    if (response.data.resultCode == 0) {
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
