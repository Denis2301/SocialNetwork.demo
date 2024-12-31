const SET_USERS = "SET_USERS";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const IS_FETCHING = "IS_FETCHING";
const initialState = {
    users: [],
    totalUsersCount: null,
    currentPage: 1,
    pageSize: 4,
    isFetching: false,
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
export const follow = (id) => ({ type: FOLLOW, userId: id });
export const unFollow = (id) => ({ type: UNFOLLOW, userId: id });
export const toggleIsFetching = (isFetching) => ({
    type: IS_FETCHING,
    isFetching: isFetching,
});
export default usersReducer;
