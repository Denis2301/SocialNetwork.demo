import { ResultCodesEnum, UsersAPI } from "../api/api";
import { updateObjectInArray } from "../utils/objects-helper";
import { PhotosType, UserType } from "@/types/types";
import { AppStateType } from "./redux-store";
import { ThunkAction } from "redux-thunk";
import { Dispatch } from "redux";
const SET_USERS = "SET_USERS";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const IS_FETCHING = "IS_FETCHING";
const FOLLOWING_IN_PROGRESS = "FOLLOWING_IN_PROGRESS";

export type InitialStateType = typeof initialState;

const initialState = {
    users: [] as Array<UserType>,
    totalUsersCount: 0,
    currentPage: 1,
    pageSize: 10,
    isFetching: false,
    followingInProgress: [] as Array<number>, //Array of users id
};
type ActionsTypes =
    | {
          type: typeof SET_USERS;
          users: Array<UserType>;
      }
    | { type: typeof SET_CURRENT_PAGE; currentPage: number }
    | { type: typeof SET_TOTAL_COUNT; totalUsersCount: number }
    | { type: typeof FOLLOW; userId: number }
    | { type: typeof UNFOLLOW; userId: number }
    | { type: typeof IS_FETCHING; isFetching: boolean }
    | {
          type: typeof FOLLOWING_IN_PROGRESS;
          isFetching: boolean;
          userId: number;
      };
const usersReducer = (
    state = initialState,
    action: ActionsTypes
): InitialStateType => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users],
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage,
            };
        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount,
            };
        case FOLLOW:
            return {
                ...state,
                users: [
                    ...updateObjectInArray(state.users, action.userId, {
                        followed: true,
                    }),
                ],
            };
        case UNFOLLOW:
            return {
                ...state,
                users: [
                    ...updateObjectInArray(state.users, action.userId, {
                        followed: false,
                    }),
                ],
            };
        case IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            };
        case FOLLOWING_IN_PROGRESS:
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

export const setUsers = (users: Array<UserType>): ActionsTypes => ({
    type: SET_USERS,
    users,
});

export const setTotalCount = (totalUsersCount: number): ActionsTypes => ({
    type: SET_TOTAL_COUNT,
    totalUsersCount,
});

export const setCurrentPage = (currentPage: number): ActionsTypes => ({
    type: SET_CURRENT_PAGE,
    currentPage,
});

export const acceptFollow = (id: number): ActionsTypes => ({
    type: FOLLOW,
    userId: id,
});

export const acceptUnfollow = (id: number): ActionsTypes => ({
    type: UNFOLLOW,
    userId: id,
});

export const toggleIsFetching = (isFetching: boolean): ActionsTypes => ({
    type: IS_FETCHING,
    isFetching,
});

export const toggleIsFollowing = (
    userId: number,
    isFetching: boolean
): ActionsTypes => ({
    type: FOLLOWING_IN_PROGRESS,
    userId,
    isFetching,
});
type ThunkType = ThunkAction<
    Promise<void>,
    AppStateType,
    unknown,
    ActionsTypes
>;
export const requestUsers =
    (page: number, pageSize: number): ThunkType =>
    async (dispatch, getState) => {
        dispatch(toggleIsFetching(true));
        let data = await UsersAPI.getUsers(page, pageSize);
        dispatch(setUsers(data.items));
        dispatch(setTotalCount(data.totalCount));
        dispatch(toggleIsFetching(false));
        dispatch(setCurrentPage(page));
    };
type DispatchType = Dispatch<ActionsTypes>;
const _followUnfollowFlow = async (
    userId: number,
    followUnfollow: any,
    dispatch: DispatchType,
    actionCreator: (userId: number) => ActionsTypes
) => {
    dispatch(toggleIsFollowing(userId, true));
    let response = await followUnfollow(userId);

    if (response.resultCode == ResultCodesEnum.Success) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleIsFollowing(0, false));
};
export const follow =
    (userId: number): ThunkType =>
    async (dispatch) => {
        _followUnfollowFlow(
            userId,
            UsersAPI.getFollow.bind(UsersAPI),
            dispatch,
            acceptFollow
        );
    };
export const unFollow =
    (userId: number): ThunkType =>
    async (dispatch) => {
        _followUnfollowFlow(
            userId,
            UsersAPI.getUnFollow.bind(UsersAPI),
            dispatch,
            acceptUnfollow
        );
    };
export default usersReducer;
