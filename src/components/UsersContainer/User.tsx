import objStyle from "../UsersContainer/User.module.css";
import userPhoto from "../../assets/images/user.png";
import { NavLink } from "react-router-dom";
import { FC } from "react";
import { UserType } from "../../types/types";
type CustomerType = {
	key: number;
    users: UserType;
    followingInProgress: Array<number>;
    follow: (userId: number) => void;
    unFollow: (userId: number) => void;
};
export const User: FC<CustomerType> = ({
	key,
    users,
    followingInProgress,
    follow,
    unFollow,
}) => {
    return (
        <div className={objStyle.wrapperUser} key={key}>
            <div className={objStyle.status}>
                <div className={objStyle.status__img}>
                    <NavLink to={`/profile/${users.id}`}>
                        <img
                            src={
                                users.photos.small
                                    ? users.photos.small
                                    : userPhoto
                            }
                            alt=""
                        />
                    </NavLink>
                </div>
                {!users.followed ? (
                    <button
                        disabled={followingInProgress.some(
                            (id) => id == users.id
                        )}
                        className={objStyle.status__follow}
                        onClick={() => {
                            follow(users.id);
                        }}
                    >
                        Follow
                    </button>
                ) : (
                    <button
                        disabled={followingInProgress.some(
                            (id) => id == users.id
                        )}
                        className={objStyle.status__follow}
                        onClick={() => {
                            unFollow(users.id);
                        }}
                    >
                        Unfollow
                    </button>
                )}
            </div>
            <div className={objStyle.description}>
                <div className={objStyle.description__name_location}>
                    <span className={objStyle.description__fullName}>
                        {users.name}
                    </span>
                    <div className={objStyle.description__location}>
                        <span className={objStyle.location_country}>
                            {users.location?.country}
                        </span>
                        <span className={objStyle.location_city}>
                            {users.location?.city}
                        </span>
                    </div>
                </div>
                <p className={objStyle.description__status}>{users.status}</p>
            </div>
        </div>
    );
};
