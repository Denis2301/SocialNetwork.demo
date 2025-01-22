import objStyle from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import { NavLink } from "react-router-dom";

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
    let countPage = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= countPage; i++) {
        pages.push(i);
    }
    return (
        <main className={objStyle.content}>
            <h1 className={objStyle.content__title}> Users</h1>
            <div className={objStyle.pagination}>
                {pages.map((p) => {
                    return (
                        <span
                            onClick={(e) => {
                                onPageChanged(p);				
                            }}
                            className={
                                currentPage === p ? objStyle.selectedPage : ""
                            }
                        >
                            {p}
                        </span>
                    );
                })}
            </div>
            {users.map((user) => (
                <div className={objStyle.wrapperUser} key={user.id}>
                    <div className={objStyle.status}>
                        <div className={objStyle.status__img}>
                            <NavLink to={`/profile/${user.id}`}>
                                <img
                                    src={
                                        user.photos.small
                                            ? user.photos.small
                                            : userPhoto
                                    }
                                    alt=""
                                />
                            </NavLink>
                        </div>
                        {!user.followed ? (
                            <button
                                disabled={followingInProgress.some(
                                    (id) => id == user.id
                                )}
                                className={objStyle.status__follow}
                                onClick={() => {
                                    follow(user.id);
                                }}
                            >
                                Followed
                            </button>
                        ) : (
                            <button
                                disabled={followingInProgress.some(
                                    (id) => id == user.id
                                )}
                                className={objStyle.status__follow}
                                onClick={() => {
                                    unFollow(user.id);
                                }}
                            >
                                Unfollowed
                            </button>
                        )}
                    </div>
                    <div className={objStyle.description}>
                        <div className={objStyle.description__name_location}>
                            <span className={objStyle.description__fullName}>
                                {user.name}
                            </span>
                            <div className={objStyle.description__location}>
                                <span className={objStyle.location_country}>
                                    {user.location?.country}
                                </span>
                                <span className={objStyle.location_city}>
                                    {user.location?.city}
                                </span>
                            </div>
                        </div>
                        <p className={objStyle.description__status}>
                            {user.status}
                        </p>
                    </div>
                </div>
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
