import userPhoto from ".././assets/images/user.png";
import { AuthAPI, ProfileAPI } from "../api/api";

const SET_USER_DATE = "SET_USER_DATE";
const SET_PHOTO_PROFILE = "SET_PHOTO_PROFILE";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const SET_CAPTCHA_URL = "SET_CAPTCHA_URL";

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
    return await AuthAPI.getAuthMe().then((response) => {
        if (response.data.resultCode === 0) {
            const { id, email, login } = response.data.data;
            dispatch(setAuthUserDate(id, email, login, true));
            dispatch(toggleIsFetching(true));
            ProfileAPI.getProfileId(id).then((data) => {
                dispatch(
                    setPhotoProfile(data.photos ? data.photos.small : userPhoto)
                );
            });
        }
    });
};
export const logMe = (email, password, rememberMe) => async (dispatch) => {
    return await AuthAPI.logMe(email, password, rememberMe).then(
        async (response) => {
            if (response.data.resultCode == 0) {
                dispatch(getAuthUserData());
            } else {
                await AuthAPI.captcha().then((response) => {
                    dispatch(setCaptchaUrl(response.data.url));
                });
            }
        }
    );
};
export const logOutMe = () => async (dispatch) => {
    return await AuthAPI.logOutMe().then(async (response) => {
        if (response.data.resultCode == 0) {
            dispatch(setAuthUserDate(null, null, null, false));
        }
    });
};
export default authReducer;
