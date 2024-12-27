const SET_USERS = "SET_USERS";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const initialState = {
    users: [],
    totalUsersCount: null,
    currentPage: 2,
    pageSize: 4,
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
        default:
            return { ...state };
    }
};

export const setUsersAC = (type, users) => ({ type: type, users });
export const setTotalCountAC = (type, totalCount) => ({
    type: type,
    totalCount,
});
export const setCurrentPageAC = (type, currentPage) => ({
    type: type,
    currentPage,
});
export const followAC = (type, id) => ({ type: type, userId: id });
export const unFollowAC = (type, id) => ({ type: type, userId: id });
export default usersReducer;
