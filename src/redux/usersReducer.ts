import { APIResponseType, ResultCodesEnum } from "../api/api";
import { updateObjectInArray } from "../utils/objects-helper";
import { UserType } from "@/types/types";
import { InferActionsTypes, CommonThunkType } from "./redux-store";
import { UsersAPI } from ".././api/users-api";
import { Dispatch } from "redux";

export type InitialStateType = typeof initialState;

export const initialState = {
    users: [] as Array<UserType>,
    totalUsersCount: 0,
    currentPage: 1,
    pageSize: 5,
    isFetching: false,
    followingInProgress: [] as Array<number>, //Array of users id
    filter: { term: "", friend: null as null | boolean },
};
export const actions = {
    setUsers: (users: Array<UserType>) =>
        ({
            type: "USERS/SET_USERS",
            users,
        } as const),

    setTotalCount: (totalUsersCount: number) =>
        ({
            type: "USERS/SET_TOTAL_COUNT",
            totalUsersCount,
        } as const),

    setCurrentPage: (currentPage: number) =>
        ({
            type: "USERS/SET_CURRENT_PAGE",
            currentPage,
        } as const),
    setFilter: (filter: FriendSearchFormType) =>
        ({
            type: "USERS/SET_FILTER",
            payload: filter,
        } as const),

    acceptFollow: (id: number) =>
        ({
            type: "USERS/FOLLOW",
            userId: id,
        } as const),

    acceptUnfollow: (id: number) =>
        ({
            type: "USERS/UNFOLLOW",
            userId: id,
        } as const),

    toggleIsFetching: (isFetching: boolean) =>
        ({
            type: "USERS/IS_FETCHING",
            isFetching,
        } as const),

    toggleIsFollowing: (userId: number, isFetching: boolean) =>
        ({
            type: "USERS/FOLLOWING_IN_PROGRESS",
            userId,
            isFetching,
        } as const),
};

const usersReducer = (
    state = initialState,
    action: ActionsTypes
): InitialStateType => {
    switch (action.type) {
        case "USERS/SET_USERS":
            return {
                ...state,
                users: action.users,
            };
        case "USERS/SET_CURRENT_PAGE":
            return {
                ...state,
                currentPage: action.currentPage,
            };
        case "USERS/SET_FILTER":
            return {
                ...state,
                filter: action.payload,
            };
        case "USERS/SET_TOTAL_COUNT":
            return {
                ...state,
                totalUsersCount: action.totalUsersCount,
            };
        case "USERS/FOLLOW":
            return {
                ...state,
                users: [
                    ...updateObjectInArray(state.users, action.userId, {
                        followed: true,
                    }),
                ],
            };
        case "USERS/UNFOLLOW":
            return {
                ...state,
                users: [
                    ...updateObjectInArray(state.users, action.userId, {
                        followed: false,
                    }),
                ],
            };
        case "USERS/IS_FETCHING":
            return {
                ...state,
                isFetching: action.isFetching,
            };
        case "USERS/FOLLOWING_IN_PROGRESS":
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

export const requestUsers =
    (page: number, pageSize: number, filter: FriendSearchFormType): ThunkType =>
    async (dispatch, getState) => {
        dispatch(actions.toggleIsFetching(true));
        let data = await UsersAPI.getUsers(
            page,
            pageSize,
            filter.term,
            filter.friend
        );
        dispatch(actions.setUsers(data.items));
        dispatch(actions.setTotalCount(data.totalCount));
        dispatch(actions.toggleIsFetching(false));
        dispatch(actions.setCurrentPage(page));
        dispatch(actions.setFilter(filter));
    };

const _followUnfollowFlow = async (
    userId: number,
    followUnfollow: (userId: number) => Promise<APIResponseType>,
    dispatch: Dispatch<ActionsTypes>,
    actionCreator: (userId: number) => ActionsTypes
) => {
    dispatch(actions.toggleIsFollowing(userId, true));
    let response = await followUnfollow(userId);

    if (response.resultCode == ResultCodesEnum.Success) {
        dispatch(actionCreator(userId));
    }
    dispatch(actions.toggleIsFollowing(userId, false));
};
export const follow =
    (userId: number): ThunkType =>
    async (dispatch) => {
        await _followUnfollowFlow(
            userId,
            UsersAPI.getFollow.bind(UsersAPI),
            dispatch,
            actions.acceptFollow
        );
    };
export const unFollow =
    (userId: number): ThunkType =>
    async (dispatch) => {
        await _followUnfollowFlow(
            userId,
            UsersAPI.getUnFollow.bind(UsersAPI),
            dispatch,
            actions.acceptUnfollow
        );
    };
export default usersReducer;
export type ActionsTypes = InferActionsTypes<typeof actions>;
export type FriendSearchFormType = typeof initialState.filter;
export type ThunkType = CommonThunkType<ActionsTypes>;
