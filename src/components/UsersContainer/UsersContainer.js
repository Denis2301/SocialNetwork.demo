import React from "react";
import { UsersView } from "./UsersView";
import { connect } from "react-redux";
import { acceptFollow } from "../../redux/usersReducer";
import { acceptUnfollow } from "../../redux/usersReducer";
import { Preloader } from "../common/Preloader/Preloader";
import { getUsers } from "../../redux/usersReducer";
import { follow, unFollow } from "../../redux/usersReducer";
import { withAuthRedirectComponent } from "../../hoc/LoginHOCRedirect";
import { compose } from "redux";
class UsersAPIContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }
    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
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
const mapStateToUsersProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    };
};
compose(
    connect(mapStateToUsersProps, {
        follow,
        unFollow,
        acceptFollow,
        acceptUnfollow,
        getUsers,
    }),
    withAuthRedirectComponent
)(UsersAPIContainer);
export default compose(
    connect(mapStateToUsersProps, {
        follow,
        unFollow,
        acceptFollow,
        acceptUnfollow,
        getUsers,
    }),
    withAuthRedirectComponent
)(UsersAPIContainer);
