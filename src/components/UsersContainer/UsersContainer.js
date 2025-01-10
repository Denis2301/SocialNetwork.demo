import React from "react";
import { UsersView } from "./UsersView";
import axios from "axios";
import { connect } from "react-redux";
import { setUsers } from "../../redux/usersReducer";
import { follow } from "../../redux/usersReducer";
import { unfollow } from "../../redux/usersReducer";
import { setCurrentPage } from "../../redux/usersReducer";
import { setTotalCount } from "../../redux/usersReducer";
import { toggleIsFetching } from "../../redux/usersReducer";
import { Preloader } from "../common/Preloader/Preloader";

class UsersAPIContainer extends React.Component {
    componentDidMount() {
        if (!this.props.users.length) {
            this.props.toggleIsFetching(true);
            axios
                .get(
                    `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
                    {
                        withCredentials: true,
                    }
                )
                .then((response) => {
                    this.props.setUsers(response.data.items);
                    this.props.setTotalCount(response.data.totalCount);
                    this.props.toggleIsFetching(false);
                });
        }
    }
    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
                {
                    withCredentials: true,
                }
            )
            .then((response) => {
                this.props.setUsers(response.data.items);
                this.props.toggleIsFetching(false);
            });
    };

    render() {
        return (
            <>
                {this.props.isFetching ? (
                    <Preloader />
                ) : (
                    <UsersView
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}
                        onPageChanged={this.onPageChanged}
                        currentPage={this.props.currentPage}
                        users={this.props.users}
                        totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                    />
                )}
            </>
        );
    }
}
const mapStateToUsersProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    };
};

export const UsersContainer = connect(mapStateToUsersProps, {
    setCurrentPage,
    follow,
    unfollow,
    setTotalCount,
    setUsers,
    toggleIsFetching,
})(UsersAPIContainer);
