import { AppDispatch } from "@/redux/redux-store";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	FriendSearchFormType,
	follow,
	requestUsers,
	unFollow,
} from "../../redux/usersReducer";
import {
	getCurrentPage,
	getFollowInProgress,
	getFriendsFilter,
	getPageSize,
	getTotalUsersCount,
	getUsers,
} from "../../redux/usersSelector";
import { Paginator } from "../common/Paginator/Paginator";
import { SearchFriendsForm } from "./SearchFriends";
import { User } from "./User";
import objStyle from "./User.module.css";

type UsersType = {};
export const UsersView: FC<UsersType> = ({}) => {
    const totalUsersCount: number = useSelector(getTotalUsersCount);
    const currentPage: number = useSelector(getCurrentPage);
    const pageSize: number = useSelector(getPageSize);
    const filter: FriendSearchFormType = useSelector(getFriendsFilter);
    const users: UsersType = useSelector(getUsers);
    const followingInProgress: Array<number> = useSelector(getFollowInProgress);
    const dispatch = useDispatch<AppDispatch>();
    const onPageChanged = (pageNumber: number) => {
        dispatch(requestUsers(pageNumber, pageSize, filter));
    };
    const onFilterChange = (filter: FriendSearchFormType) => {
        dispatch(requestUsers(1, pageSize, filter));
    };
    const followCall = (userId: number) => {
        dispatch(follow(userId));
    };
    const unFollowCall = (userId: number) => {
        dispatch(unFollow(userId));
    };

    return (
        <main className={objStyle.content}>
            <div className={objStyle.usersSearch}>
                <h1 className={objStyle.content__title}> Users</h1>
                <SearchFriendsForm onFilterChange={onFilterChange} />
            </div>
            {users.map((user) => (
                <User
                    key={user.id}
                    users={user}
                    followingInProgress={followingInProgress}
                    follow={followCall}
                    unFollow={unFollowCall}
                />
            ))}
            <div style={{ marginTop: "auto" }}>
                <button onClick={() => {}} className={objStyle.addUsers}>
                    Add Users
                </button>
                <Paginator
                    onPageChanged={onPageChanged}
                    currentPage={currentPage}
                    totalItemsCount={totalUsersCount}
                    pageSize={pageSize}
                    portionSize={10}
                />
            </div>
        </main>
    );
};
