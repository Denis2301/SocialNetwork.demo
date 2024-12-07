import React from "react";
import { connect } from "react-redux";
import { Users } from "./Users";
import { setUsersAC } from "../../redux/usersReducer";
import { followAC } from "../../redux/usersReducer";
import { unFollowAC } from "../../redux/usersReducer";

const mapStateToMyPostsProps = (state) => {
    return {
        users: state.usersPage.users,
    };
};
const mapDispatchToMyPostsProps = (dispatch) => {
    return {
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
    mapStateToMyPostsProps,
    mapDispatchToMyPostsProps
)(Users);
