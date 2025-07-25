import { AppDispatch } from "@/redux/redux-store";
import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
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
import {
    useQueryParams,
    StringParam,
    NumberParam,
    withDefault,
} from "use-query-params";
import { QueryParamsType } from "./UsersContainer";

type UsersType = {};
export const UsersView: FC<UsersType> = ({}) => {
    const totalUsersCount: number = useSelector(getTotalUsersCount);
    const currentPage: number = useSelector(getCurrentPage);
    const pageSize: number = useSelector(getPageSize);
    const filter: FriendSearchFormType = useSelector(getFriendsFilter);
    const users = useSelector(getUsers);
    const followingInProgress: Array<number> = useSelector(getFollowInProgress);
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const [query, setQuery] = useQueryParams({
        term: withDefault(StringParam, ""),
        friend: withDefault(StringParam, "null"),
        page: withDefault(NumberParam, 1),
    });
    useEffect(() => {
        setQuery({
            term: !!filter.term ? filter.term : "",
            friend: filter.friend !== null ? String(filter.friend) : "null",
            page: currentPage !== 1 ? currentPage : 1,
        });
    }, [filter, currentPage]);
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
                <div style={{alignSelf: 'flex-end'}}>
                    <SearchFriendsForm onFilterChange={onFilterChange} />
                </div>
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
