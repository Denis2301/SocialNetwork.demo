import React, { ComponentType } from "react";
import { UsersView } from "./UsersView";
import { ConnectedProps, connect } from "react-redux";
import { Preloader } from "../common/Preloader/Preloader";
import { requestUsers } from "../../redux/usersReducer";
import { follow, unFollow } from "../../redux/usersReducer";
import { compose } from "redux";
import { UserType } from "../../types/types";
import {
    getCurrentPage,
    getIsFetching,
    getFollowInProgress,
    getPageSize,
    getTotalUsersCount,
    getUsers,
} from "../../redux/usersSelector";
import { AppStateType } from "@/redux/redux-store";
import { setUsers } from "../../redux/usersReducer";
type OwnPropsType = {
    pageTitle: string;
};
type MapStatePropsType = {
    users: Array<UserType>;
    totalUsersCount: number;
    pageSize: number;
    currentPage: number;
    isFetching: boolean;
    followingInProgress: Array<number>;
};
type MapDispatchPropsType = {
    setUsers: (users: Array<UserType>) => void;
    follow: (userId: number) => void;
    unFollow: (userId: number) => void;
    requestUsers: (currentPage: number, pageSize: number) => void;
};
type PropsType = OwnPropsType & MapStatePropsType & MapDispatchPropsType;

class UsersAPIContainer extends React.Component<PropsType> {
    componentDidMount() {
        const { currentPage, pageSize } = this.props;
        this.props.requestUsers(currentPage, pageSize);
    }
    onPageChanged = (pageNumber: number) => {
        const { pageSize } = this.props;
        this.props.requestUsers(pageNumber, pageSize);
    };

    render() {
        return (
            <>
                <h2>{this.props.pageTitle}</h2>
                {this.props.isFetching ? (
                    <Preloader />
                ) : (
                    <UsersView
                        setUsers={this.props.setUsers}
                        follow={this.props.follow}
                        unFollow={this.props.unFollow}
                        followingInProgress={this.props.followingInProgress}
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

const mapStateToProps = (state: AppStateType) => {
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
	// TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultRootState
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(
        mapStateToProps,
        {
            follow,
            unFollow,
            requestUsers,
            setUsers,
        }
    )
)(UsersAPIContainer);
