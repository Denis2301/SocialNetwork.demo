import { ThunkAction } from "redux-thunk";
import { getAuthUserData } from "./authReducer";
import { AppStateType, InferActionsTypes, CommonThunkType } from "./redux-store";
import { useNavigate, useLocation, useParams } from "react-router-dom";



export type InitialStateType = {
    initialized: boolean;
    globalError: string | null;
};
const initialState: InitialStateType = {
    initialized: false,
    globalError: null,
};

export const actions = {
    initializedSuccess: () =>
        ({
            type: "APP/INITIALIZING_SUCCESS",
            initialized: true,
        } as const),
    setGlobalError: (globalError: string | null) =>
        ({
            type: "APP/SET_GLOBAL_ERROR",
            globalError,
        } as const),
};
type ActionsTypes = InferActionsTypes<typeof actions>;
const appReducer = (
    state = initialState,
    action: ActionsTypes
): InitialStateType => {
    switch (action.type) {
        case "APP/INITIALIZING_SUCCESS":
            return {
                ...state,
                initialized: action.initialized,
            };
        case "APP/SET_GLOBAL_ERROR":
            return {
                ...state,
                globalError: action.globalError,
            };
        default:
            return { ...state };
    }
};


export const globalErrorDispatch =
    (globalError: string | null): ThunkType =>
    async (dispatch) => {
        globalError && dispatch(actions.setGlobalError(globalError));
        setTimeout(() => {
            dispatch(actions.setGlobalError(null));
        }, 5000);
    };
export const initializeApp = (): ThunkType => async (dispatch) => {
    let promise = await dispatch(getAuthUserData());
    Promise.all([promise]).then(() => {
        dispatch(actions.initializedSuccess());
    });
};

export default appReducer;
type ThunkType = CommonThunkType<ActionsTypes>;