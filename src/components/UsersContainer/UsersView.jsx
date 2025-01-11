import objStyle from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { FollowAPI } from "../../api/api";

export const UsersView = ({
    onPageChanged,
    setUsers,
    currentPage,
    users,
    follow,
    unfollow,
    totalUsersCount,
    pageSize,
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
                                currentPage === p && objStyle.selectedPage
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
                                className={objStyle.status__follow}
                                onClick={() => {
                                    if (user.id) {
                                        FollowAPI.getFollow(user.id).then((response) => {
                                            if (response.data.resultCode == 0) {
                                                follow(user.id);
                                            }
                                        });
                                    }
                                }}
                            >
                                Followed
                            </button>
                        ) : (
                            <button
                                className={objStyle.status__follow}
                                onClick={() => {
                                    if (user.id) {
                                        FollowAPI.getUnFollow(user.id).then(
                                            (response) => {
                                                if (
                                                    response.data.resultCode ==
                                                    0
                                                ) {
                                                    unfollow(user.id);
                                                }
                                            }
                                        );
                                    }
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
