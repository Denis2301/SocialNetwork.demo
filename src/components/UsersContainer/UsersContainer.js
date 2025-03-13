import React from "react";
import { UsersView } from "./UsersView";
import { connect } from "react-redux";
import { acceptFollow } from "../../redux/usersReducer";
import { acceptUnfollow } from "../../redux/usersReducer";
import { Preloader } from "../common/Preloader/Preloader";
import { requestUsers } from "../../redux/usersReducer";
import { follow, unFollow } from "../../redux/usersReducer";
import { compose } from "redux";
import {
    getCurrentPage,
    getIsFetching,
    getFollowInProgress,
    getPageSize,
    getTotalUsersCount,
    getUsers,
} from "../../redux/usersSelector";

class UsersAPIContainer extends React.Component {
    componentDidMount() {
        const { currentPage, pageSize } = this.props;
        this.props.requestUsers(currentPage, pageSize);
    }
    onPageChanged = (pageNumber) => {
        const { pageSize } = this.props;
        this.props.requestUsers(pageNumber, pageSize);
    };

    render() {
        return (
            <>
                {this.props.isFetching ? (
                    <Preloader />
                ) : (
                    <UsersView
                        follow={this.props.follow}
                        unFollow={this.props.unFollow}
                        followingInProgress={this.props.followingInProgress}
                        acceptFollow={this.props.acceptFollow}
                        acceptUnfollow={this.props.acceptUnfollow}
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

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        totalUsersCount: getTotalUsersCount(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowInProgress(state),
    };
};

export default compose(
    connect(mapStateToProps, {
        follow,
        unFollow,
        acceptFollow,
        acceptUnfollow,
        requestUsers,
    })
)(UsersAPIContainer);
