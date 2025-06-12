import { CommonThunkType, InferActionsTypes } from "./redux-store";
import { UserType } from "../types/types";
import { UsersAPI } from "../api/sidebar-api";

export type InitialStateType = typeof initialState;
const initialState = {
    friends: [] as Array<UserType>,
};
export const actions = {
    setUsers: (friends: Array<UserType>) =>
        ({
            type: "FRIENDS/SET_FRIENDS",
            friends,
        } as const),
};

const sidebarReducer = (
    state = initialState,
    action: ActionsTypes
): InitialStateType => {
    switch (action.type) {
        case "FRIENDS/SET_FRIENDS":
            return {
                ...state,
                friends: [...state.friends, ...action.friends].slice(0, 10),
            };
        default:
            return { ...state };
    }
};

export const requestFriends = (): ThunkType => async (dispatch) => {
    let data = await UsersAPI.getFiends();
    dispatch(actions.setUsers(data.items));
};

export default sidebarReducer;
type ActionsTypes = InferActionsTypes<typeof actions>;
type ThunkType = CommonThunkType<ActionsTypes>;
