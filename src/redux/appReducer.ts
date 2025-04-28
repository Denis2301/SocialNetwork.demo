
import { getAuthUserData } from "./authReducer";

const INITIALIZING_SUCCESS = "INITIALIZING_SUCCESS";
const SET_GLOBAL_ERROR = "SET_GLOBAL_ERROR";

export type InitialStateType = {
    initialized: boolean;
    globalError: string | null;
};
const initialState: InitialStateType = {
    initialized: false,
    globalError: null,
};

type ActionCreatorType =
    | { type: typeof INITIALIZING_SUCCESS; initialized: boolean }
    | { type: typeof SET_GLOBAL_ERROR; globalError: string | null };

const appReducer = (
    state = initialState,
    action: ActionCreatorType
): InitialStateType => {
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
type InitializedSuccessActionType = {
    type: typeof INITIALIZING_SUCCESS;
    initialized: boolean;
};
export const initializedSuccess = (): InitializedSuccessActionType => ({
    type: INITIALIZING_SUCCESS,
    initialized: true,
});

type setGlobalErrorType = {
    type: typeof SET_GLOBAL_ERROR;
    globalError: string | null;
};
export const setGlobalError = (
    globalError: string | null
): setGlobalErrorType => ({
    type: SET_GLOBAL_ERROR,
    globalError,
});

export const globalErrorDispatch =
    (globalError: string | null) => async (dispatch: any) => {
        globalError && dispatch(setGlobalError(globalError));
        setTimeout(() => {
            dispatch(setGlobalError(null));
        }, 5000);
    };
export const initializeApp = () => async (dispatch: any) => {
    let promise = await dispatch(getAuthUserData());
    Promise.all([promise]).then(() => {
        dispatch(initializedSuccess());
    });
};

export default appReducer;
