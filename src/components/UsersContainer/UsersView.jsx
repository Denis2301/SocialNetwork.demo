import objStyle from "./Users.module.css";

import { Paginator } from "../common/Paginator/Paginator";
import { User } from "./User";

export const UsersView = ({
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
                    user={user}
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
