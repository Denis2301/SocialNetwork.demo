import objStyle from "./Users.module.css";
import { UserType } from "../../types/types";
import { Paginator } from "../common/Paginator/Paginator";
import { User } from "./User";
import React, { FC } from "react";

type UsersType = {
    followingInProgress: Array<number>;
    currentPage: number;
    users: Array<UserType>;
    totalUsersCount: number;
    pageSize: number;
	
    follow: (userId: number) => void;
    setUsers: (users: Array<UserType>) => void;
    onPageChanged: (pageNumber: number) => void;
    unFollow: (userId: number) => void;
};
export const UsersView: FC<UsersType> = ({
    followingInProgress,
    onPageChanged,
    setUsers,
    currentPage,
    users,
    totalUsersCount,
    pageSize,
    follow,
    unFollow,
}) => {
    return (
        <main className={objStyle.content}>
            <h1 className={objStyle.content__title}> Users</h1>
            <Paginator
                onPageChanged={onPageChanged}
                currentPage={currentPage}
                totalItemsCount={totalUsersCount}
                pageSize={pageSize}
                portionSize={10}
            />
            {users.map((user) => (
                <User
                    key={user.id}
                    users={user}
                    followingInProgress={followingInProgress}
                    follow={follow}
                    unFollow={unFollow}
                />
            ))}
            <button
                onClick={() => setUsers(users)}
                className={objStyle.addUsers}
            >
                Add Users
            </button>
        </main>
    );
};
