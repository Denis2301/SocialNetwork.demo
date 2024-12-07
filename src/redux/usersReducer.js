const SET_USERS = "SET_USERS";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const initialState = {
    users: [],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users],
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

export const setUsersAC = (type, users) => ({ type: type, users: users });
export const followAC = (type, id) => ({ type: type, userId: id });
export const unFollowAC = (type, id) => ({ type: type, userId: id });
export default usersReducer;
