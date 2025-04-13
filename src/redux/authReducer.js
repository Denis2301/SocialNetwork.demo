import { stopSubmit } from "redux-form";
import userPhoto from ".././assets/images/user.png";
import { AuthAPI, ProfileAPI, SecurityAPI } from "../api/api";

const SET_USER_DATE = "auth/SET_USER_DATE";
const SET_PHOTO_PROFILE = "auth/SET_PHOTO_PROFILE";
const TOGGLE_IS_FETCHING = "auth/TOGGLE_IS_FETCHING";
const SET_CAPTCHA_URL = "auth/SET_CAPTCHA_URL";

const initialState = {
    id: null,
    email: null,
    login: null,
    photo: null,
    isAuth: false,
    logData: null,
    captchaUrl: null,
};
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATE:
            return {
                ...state,
                ...action.payload,
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isAuth: action.payload,
            };
        case SET_CAPTCHA_URL:
            return {
                ...state,
                captchaUrl: action.captchaUrl,
            };
        default:
            return { ...state };
    }
};

export const toggleIsFetching = (bool) => ({
    type: TOGGLE_IS_FETCHING,
    payload: bool,
});
export const setAuthUserDate = (id, email, login, isAuth) => ({
    type: SET_USER_DATE,
    payload: {
        id,
        email,
        login,
        isAuth,
    },
});
export const setPhotoProfile = (photo) => ({
    type: SET_PHOTO_PROFILE,
    photo,
});
const setCaptchaUrl = (captchaUrl) => ({
    type: SET_CAPTCHA_URL,
    captchaUrl,
});
export const getAuthUserData = () => async (dispatch) => {
    let response = await AuthAPI.getAuthMe();
    if (response.data.resultCode === 0) {
        const { id, email, login } = response.data.data;
        dispatch(setAuthUserDate(id, email, login));
        dispatch(toggleIsFetching(true));
        let data = await ProfileAPI.getProfileId(id);

        dispatch(setPhotoProfile(data.photos ? data.photos.small : userPhoto));
        return response.data;
    }
};
export const logMe =
    (email, password, rememberMe, captcha) => async (dispatch) => {
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

const getCaptchaUrl = () => async (dispatch) => {
    const captchaResponse = await SecurityAPI.getCaptchaUrl();
    const captchaUrl = captchaResponse.data.url;

    dispatch(setCaptchaUrl(captchaUrl));
};

export const logOutMe = () => async (dispatch) => {
    let response = await AuthAPI.logOutMe();
    if (response.data.resultCode == 0) {
        dispatch(setAuthUserDate(null, null, null));
        dispatch(toggleIsFetching(false));
    }
};
export default authReducer;
