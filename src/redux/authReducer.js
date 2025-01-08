const SET_USER_DATE = "SET_USER_DATE";
const SET_PHOTO_PROFILE = "SET_PHOTO_PROFILE";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const initialState = {
    id: null,
    email: null,
    login: null,
    photo: null,
    isAuth: false,
};
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATE:
            return {
                ...state,
                ...action.date,
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isAuth: action.value,
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

export const toggleIsFetching = (bool) => ({
    type: TOGGLE_IS_FETCHING,
    value: bool,
});
export const setAuthUserDate = (id, email, login) => ({
    type: SET_USER_DATE,
    date: {
        id,
        email,
        login,
    },
});
export const setPhotoProfile = (photo) => ({
    type: SET_PHOTO_PROFILE,
    photo,
});
export default authReducer;
