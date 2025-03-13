import { getAuthUserData } from "./authReducer";

const INITIALIZING_SUCCESS = "INITIALIZING_SUCCESS";

const initialState = {
    initialized: false,
};
const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZING_SUCCESS:
            return {
                ...state,
                initialized: true,
            };
        default:
            return { ...state };
    }
};

export const initializedSuccess = () => ({
    type: INITIALIZING_SUCCESS,
});

export const initializeApp = () => async (dispatch) => {
    let promise = await dispatch(getAuthUserData());
    Promise.all([promise]).then(() => {
        dispatch(initializedSuccess());
    });
};

export default appReducer;
