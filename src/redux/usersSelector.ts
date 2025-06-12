import { createSelector } from "reselect";
import { AppStateType } from "./redux-store";
import { UserType } from "@/types/types";
import { FriendSearchFormType } from "./usersReducer";

const getUsersSelector = (state: AppStateType): Array<UserType> => {
    return state.usersPage.users;
};

export const getUsers = createSelector(
    getUsersSelector,
    (users): Array<UserType> => {
        return users.filter((u) => true);
    }
);
export const getFriendsFilter = (state: AppStateType): FriendSearchFormType => {
    return state.usersPage.filter;
};
export const getCaptcha = (state: AppStateType): string | null => {
    return state.auth.captchaUrl;
};
export const getIsFetching = (state: AppStateType): boolean => {
    return state.usersPage.isFetching;
};
export const getPageSize = (state: AppStateType): number => {
    return state.usersPage.pageSize;
};
export const getTotalUsersCount = (state: AppStateType): number => {
    return state.usersPage.totalUsersCount;
};
export const getCurrentPage = (state: AppStateType): number => {
    return state.usersPage.currentPage;
};
export const getFollowInProgress = (state: AppStateType): Array<number> => {
    return state.usersPage.followingInProgress;
};
