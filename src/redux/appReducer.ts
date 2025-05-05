import { ThunkAction } from "redux-thunk";
import { getAuthUserData } from "./authReducer";
import { AppStateType, InferActionsTypes } from "./redux-store";

export type InitialStateType = {
    initialized: boolean;
    globalError: string | null;
};
const initialState: InitialStateType = {
    initialized: false,
    globalError: null,
};

const actions = {
    initializedSuccess: () =>
        ({
            type: "INITIALIZING_SUCCESS",
            initialized: true,
        } as const),
    setGlobalError: (globalError: string | null) =>
        ({
            type: "SET_GLOBAL_ERROR",
            globalError,
        } as const),
};
type ActionsTypes = InferActionsTypes<typeof actions>;
const appReducer = (
    state = initialState,
    action: ActionsTypes
): InitialStateType => {
    switch (action.type) {
        case "INITIALIZING_SUCCESS":
            return {
                ...state,
                initialized: action.initialized,
            };
        case "SET_GLOBAL_ERROR":
            return {
                ...state,
                globalError: action.globalError,
            };
        default:
            return { ...state };
    }
};

type ThunkType = ThunkAction<
    Promise<void>,
    AppStateType,
    unknown,
    ActionsTypes
>;
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
