import objStyle from "../UsersContainer/Users.module.css";
import userPhoto from "../../assets/images/user.png";
import { NavLink } from "react-router-dom";

export const User = ({ key, user, followingInProgress, follow, unFollow }) => {
    return (
        <div className={objStyle.wrapperUser} key={key}>
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
                <p className={objStyle.description__status}>{user.status}</p>
            </div>
        </div>
    );
};
