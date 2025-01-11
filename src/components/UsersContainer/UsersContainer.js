import React from "react";
import { UsersView } from "./UsersView";
import { connect } from "react-redux";
import { setUsers } from "../../redux/usersReducer";
import { follow } from "../../redux/usersReducer";
import { unfollow } from "../../redux/usersReducer";
import { setCurrentPage } from "../../redux/usersReducer";
import { setTotalCount } from "../../redux/usersReducer";
import { toggleIsFetching } from "../../redux/usersReducer";
import { Preloader } from "../common/Preloader/Preloader";
import { UsersAPI } from "../../api/api";

class UsersAPIContainer extends React.Component {
    componentDidMount() {
        if (!this.props.users.length) {
            this.props.toggleIsFetching(true);
            UsersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(
                (data) => {
                    this.props.setUsers(data.items);
                    this.props.setTotalCount(data.totalCount);
                    this.props.toggleIsFetching(false);
                }
            );
        }
    }
    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        UsersAPI.getUsers(pageNumber, this.props.pageSize).then(
            (data) => {
                this.props.setUsers(data.items);
                this.props.toggleIsFetching(false);
            }
        );
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
