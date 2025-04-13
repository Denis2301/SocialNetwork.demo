import { getAuthUserData } from "./authReducer";

const INITIALIZING_SUCCESS = "INITIALIZING_SUCCESS";
const SET_GLOBAL_ERROR = "SET_GLOBAL_ERROR";

const initialState = {
    initialized: false,
    globalError: null,
};
const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZING_SUCCESS:
            return {
                ...state,
                initialized: action.initialized,
            };
        case SET_GLOBAL_ERROR:
            return {
                ...state,
                globalError: action.globalError,
            };
        default:
            return { ...state };
    }
};

export const initializedSuccess = () => ({
    type: INITIALIZING_SUCCESS,
    initialized: true,
});
export const setGlobalError = (globalError) => ({
    type: SET_GLOBAL_ERROR,
    globalError,
});
export const globalErrorDispatch = (globalError) => async (dispatch) => {
	globalError && dispatch(setGlobalError(globalError))
	setTimeout(() => {
		dispatch(setGlobalError(null));
	}, 5000);
}
export const initializeApp = () => async (dispatch) => {
    let promise = await dispatch(getAuthUserData());
    Promise.all([promise]).then(() => {
        dispatch(initializedSuccess());
    });
};

export default appReducer;
