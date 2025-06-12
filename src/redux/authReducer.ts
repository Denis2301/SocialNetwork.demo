import { ResultCodeForCaptchaEnum, ResultCodesEnum } from "./../api/api";
import { stopSubmit } from "redux-form";
import userPhoto from ".././assets/images/user.png";
import { InferActionsTypes, CommonThunkType } from "./redux-store";
import { AuthAPI } from ".././api/auth-api";
import { ProfileAPI } from ".././api/profile-api";
import { SecurityAPI } from ".././api/security-api";
import { ProfileType } from "@/types/types";
import { Action } from "redux";

const initialState = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    photo: null as string | null,
    isAuth: false as boolean,
    logData: null as string | null,
    captchaUrl: null as string | null,
};
export type InitializedStateType = typeof initialState;
const authReducer = (
    state: InitializedStateType = initialState,
    action: ActionsTypes
): InitializedStateType => {
    switch (action.type) {
        case "AUTH/SET_USER_DATE":
            return {
                ...state,
                ...action.payload,
            };
        case "AUTH/TOGGLE_IS_FETCHING":
            return {
                ...state,
                isAuth: action.isAuth,
            };
        case "AUTH/SET_CAPTCHA_URL":
            return {
                ...state,
                captchaUrl: action.captchaUrl,
            };
        case "AUTH/SET_PHOTO_PROFILE":
            return {
                ...state,
                photo: action.photo,
            };
        default:
            return { ...state };
    }
};

export const actions = {
    toggleIsFetching: (isAuth: boolean) =>
        ({
            type: "AUTH/TOGGLE_IS_FETCHING",
            isAuth,
        } as const),
    setAuthUserDate: (
        id: number | null,
        email: string | null,
        login: string | null,
        isAuth: boolean
    ) =>
        ({
            type: "AUTH/SET_USER_DATE",
            payload: {
                id,
                email,
                login,
                isAuth,
            },
        } as const),

    setPhotoProfile: (photo: string) =>
        ({
            type: "AUTH/SET_PHOTO_PROFILE",
            photo,
        } as const),
    setCaptchaUrl: (captchaUrl: string | null) =>
        ({
            type: "AUTH/SET_CAPTCHA_URL",
            captchaUrl,
        } as const),
};

export const getAuthUserData = (): ThunkType => async (dispatch) => {
    let meData = await AuthAPI.getAuthMe();
    if (meData.resultCode === ResultCodesEnum.Success) {
        const { id, email, login } = meData.data;
        dispatch(actions.setAuthUserDate(id, email, login, true));
        dispatch(actions.toggleIsFetching(true));
        let data: ProfileType = await ProfileAPI.getProfileId(id);

        dispatch(
            actions.setPhotoProfile(data.photos ? data.photos.small : userPhoto)
        );
        return meData.data;
    }
};
export const logMe =
    (
        email: string,
        password: string,
        rememberMe: boolean,
        captcha: null | string = null
    ): ThunkType =>
    async (dispatch) => {
        let loginData = await AuthAPI.logMe(
            email,
            password,
            rememberMe,
            captcha
        );
        if (loginData.resultCode == ResultCodesEnum.Success) {
            dispatch(getAuthUserData());
        } else {
            if (
                loginData.resultCode ==
                ResultCodeForCaptchaEnum.CaptchaIsRequired
            )
                dispatch(getCaptchaUrl());
            let message =
                loginData.messages.length > 0
                    ? loginData.messages[0]
                    : "Common error";

            setTimeout(() => {
                dispatch(
                    stopSubmit("login", {
                        _error: message,
                    })
                )
            }, 500);
        }
    };
export const logOutMe = (): ThunkType => async (dispatch) => {
    let response = await AuthAPI.logOutMe();
    if (response.resultCode == ResultCodesEnum.Success) {
        dispatch(actions.setAuthUserDate(null, null, null, false));
        dispatch(actions.toggleIsFetching(false));
    }
};
const getCaptchaUrl = (): ThunkType => async (dispatch) => {
    const captchaResponse = await SecurityAPI.getCaptchaUrl();
    const captchaUrl = captchaResponse.url;

    dispatch(actions.setCaptchaUrl(captchaUrl));
};

export default authReducer;
type ActionsTypes = InferActionsTypes<typeof actions>;
type ThunkType = CommonThunkType<ActionsTypes | ReturnType<typeof stopSubmit>>;
