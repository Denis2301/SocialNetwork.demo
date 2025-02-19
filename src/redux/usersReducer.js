import { UsersAPI } from "../api/api";
const SET_USERS = "SET_USERS";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const IS_FETCHING = "IS_FETCHING";
const FOLLOWING_IN_PROGRESS = "FOLLOWING_IN_PROGRESS";
const initialState = {
    users: [],
    totalUsersCount: null,
    currentPage: 1,
    pageSize: 4,
    isFetching: false,
    followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: [...action.users],
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage,
            };
        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalCount,
            };
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((u) =>
                    u.id == action.userId ? { ...u, followed: true } : u
                ),
            };
        case UNFOLLOW:
            return {
                ...state,
                users: [
                    ...state.users.map((u) =>
                        u.id == action.userId ? { ...u, followed: false } : u
                    ),
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

export const setUsers = (users) => ({ type: SET_USERS, users });
export const setTotalCount = (totalCount) => ({
    type: SET_TOTAL_COUNT,
    totalCount,
});
export const setCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage,
});
export const acceptFollow = (id) => ({ type: FOLLOW, userId: id });
export const acceptUnfollow = (id) => ({ type: UNFOLLOW, userId: id });
export const toggleIsFetching = (isFetching) => ({
    type: IS_FETCHING,
    isFetching,
});
export const toggleIsFollowing = (isFollowing, isFetching) => ({
    type: FOLLOWING_IN_PROGRESS,
    isFollowing,
    isFetching,
});
export const requestUsers = (page, pageSize) => (dispatch) => {
    dispatch(toggleIsFetching(true));
    UsersAPI.getUsers(page, pageSize).then((data) => {
        dispatch(setUsers(data.items));
        dispatch(setTotalCount(data.totalCount));
        dispatch(toggleIsFetching(false));
        dispatch(setCurrentPage(page));
    });
};
export const follow = (userId) => (dispatch) => {
    dispatch(toggleIsFollowing(userId, true));
    UsersAPI.getFollow(userId).then((response) => {
        if (response.data.resultCode == 0) {
            dispatch(acceptFollow(userId));
        }
        dispatch(toggleIsFollowing(null, false));
    });
};
export const unFollow = (userId) => (dispatch) => {
    dispatch(toggleIsFollowing(userId, true));
    UsersAPI.getUnFollow(userId).then((response) => {
        if (response.data.resultCode == 0) {
            dispatch(acceptUnfollow(userId));
        }
        dispatch(toggleIsFollowing(null, false));
    });
};
export default usersReducer;
