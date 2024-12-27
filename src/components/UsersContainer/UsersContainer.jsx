import React from "react";
import { connect } from "react-redux";
import { Users } from "./Users";
import { setUsersAC } from "../../redux/usersReducer";
import { followAC } from "../../redux/usersReducer";
import { unFollowAC } from "../../redux/usersReducer";
import { setCurrentPageAC } from "../../redux/usersReducer";
import { setTotalCountAC } from "../../redux/usersReducer";
const mapStateToUsersProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
    };
};
const mapDispatchToUsersProps = (dispatch) => {
    return {
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC("SET_CURRENT_PAGE", pageNumber));
        },
        setTotalCount: (totalCount) => {
            dispatch(setTotalCountAC("SET_TOTAL_COUNT", totalCount));
        },
        follow: (userId) => {
            dispatch(followAC("FOLLOW", userId));
        },
        unfollow: (userId) => {
            dispatch(unFollowAC("UNFOLLOW", userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC("SET_USERS", users));
        },
    };
};
export const UsersContainer = connect(
    mapStateToUsersProps,
    mapDispatchToUsersProps
)(Users);
