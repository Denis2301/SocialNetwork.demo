import { ResultCodesEnum, UsersAPI } from "../api/api";
import { updateObjectInArray } from "../utils/objects-helper";
import { UserType } from "@/types/types";
import { AppStateType, InferActionsTypes } from "./redux-store";
import { ThunkAction } from "redux-thunk";
import { Dispatch } from "redux";

export type InitialStateType = typeof initialState;

const initialState = {
    users: [] as Array<UserType>,
    totalUsersCount: 0,
    currentPage: 1,
    pageSize: 10,
    isFetching: false,
    followingInProgress: [] as Array<number>, //Array of users id
};
export const actions = {
    setUsers: (users: Array<UserType>) =>
        ({
            type: "SET_USERS",
            users,
        } as const),

    setTotalCount: (totalUsersCount: number) =>
        ({
            type: "SET_TOTAL_COUNT",
            totalUsersCount,
        } as const),

    setCurrentPage: (currentPage: number) =>
        ({
            type: "SET_CURRENT_PAGE",
            currentPage,
        } as const),

    acceptFollow: (id: number) =>
        ({
            type: "FOLLOW",
            userId: id,
        } as const),

    acceptUnfollow: (id: number) =>
        ({
            type: "UNFOLLOW",
            userId: id,
        } as const),

    toggleIsFetching: (isFetching: boolean) =>
        ({
            type: "IS_FETCHING",
            isFetching,
        } as const),

    toggleIsFollowing: (userId: number, isFetching: boolean) =>
        ({
            type: "FOLLOWING_IN_PROGRESS",
            userId,
            isFetching,
        } as const),
};
type ActionsTypes = InferActionsTypes<typeof actions>;
const usersReducer = (
    state = initialState,
    action: ActionsTypes
): InitialStateType => {
    switch (action.type) {
        case "SET_USERS":
            return {
                ...state,
                users: [...state.users, ...action.users],
            };
        case "SET_CURRENT_PAGE":
            return {
                ...state,
                currentPage: action.currentPage,
            };
        case "SET_TOTAL_COUNT":
            return {
                ...state,
                totalUsersCount: action.totalUsersCount,
            };
        case "FOLLOW":
            return {
                ...state,
                users: [
                    ...updateObjectInArray(state.users, action.userId, {
                        followed: true,
                    }),
                ],
            };
        case "UNFOLLOW":
            return {
                ...state,
                users: [
                    ...updateObjectInArray(state.users, action.userId, {
                        followed: false,
                    }),
                ],
            };
        case "IS_FETCHING":
            return {
                ...state,
                isFetching: action.isFetching,
            };
        case "FOLLOWING_IN_PROGRESS":
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(
                          (id) => id !== action.userId
                      ),
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
export const requestUsers =
    (page: number, pageSize: number): ThunkType =>
    async (dispatch, getState) => {
        dispatch(actions.toggleIsFetching(true));
        let data = await UsersAPI.getUsers(page, pageSize);
        dispatch(actions.setUsers(data.items));
        dispatch(actions.setTotalCount(data.totalCount));
        dispatch(actions.toggleIsFetching(false));
        dispatch(actions.setCurrentPage(page));
    };
type DispatchType = Dispatch<ActionsTypes>;
const _followUnfollowFlow = async (
    userId: number,
    followUnfollow: any,
    dispatch: DispatchType,
    actionCreator: (userId: number) => ActionsTypes
) => {
    dispatch(actions.toggleIsFollowing(userId, true));
    let response = await followUnfollow(userId);

    if (response.resultCode == ResultCodesEnum.Success) {
        dispatch(actionCreator(userId));
    }
    dispatch(actions.toggleIsFollowing(0, false));
};
export const follow =
    (userId: number): ThunkType =>
    async (dispatch) => {
        _followUnfollowFlow(
            userId,
            UsersAPI.getFollow.bind(UsersAPI),
            dispatch,
            actions.acceptFollow
        );
    };
export const unFollow =
    (userId: number): ThunkType =>
    async (dispatch) => {
        _followUnfollowFlow(
            userId,
            UsersAPI.getUnFollow.bind(UsersAPI),
            dispatch,
            actions.acceptUnfollow
        );
    };
export default usersReducer;
