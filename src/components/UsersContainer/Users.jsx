import React, { useEffect } from "react";
import { setUsersAC } from "../../redux/usersReducer";
import objStyle from "./Users.module.css";
import axios from "axios";
import userPhoto from "../../assets/images/user.png";

export class Users extends React.Component {
    constructor(props) {
        super(props);
        this.countPage = Math.ceil(props.totalUsersCount / props.pageSize);
        this.pages = [];
        for (let i = 1; i <= this.countPage; i++) {
            this.pages.push(i);
        }
    }

    componentDidMount() {
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
            )
            .then((response) => {
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
            });
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
            )
            .then((response) => {
                this.props.setUsers(response.data.items);
            });
    };
    render() {
        return (
            <main className={objStyle.content}>
                <h1 className={objStyle.content__title}> Users</h1>
                <div className={objStyle.pagination}>
                    {this.pages.map((p) => (
                        <span
                            onClick={(e) => {
                                this.onPageChanged(p);
                            }}
                            className={
                                this.props.currentPage === p &&
                                objStyle.selectedPage
                            }
                        >
                            {p}
                        </span>
                    ))}
                </div>
                {this.props.users.map((user) => (
                    <div className={objStyle.wrapperUser} key={user.id}>
                        <div className={objStyle.status}>
                            <div className={objStyle.status__img}>
                                {" "}
                                <img
                                    src={user.photos.small ? user.photos.small : userPhoto}
                                    alt=""
                                />
                            </div>
                            {user.followed === true ? (
                                <button
                                    className={objStyle.status__follow}
                                    onClick={() => this.props.unfollow(user.id)}
                                >
                                    Followed
                                </button>
                            ) : (
                                <button
                                    className={objStyle.status__follow}
                                    onClick={() => this.props.follow(user.id)}
                                >
                                    Unfollowed
                                </button>
                            )}
                        </div>
                        <div className={objStyle.description}>
                            <div
                                className={objStyle.description__name_location}
                            >
                                <span
                                    className={objStyle.description__fullName}
                                >
                                    {user.name}
                                </span>
                                <div className={objStyle.description__location}>
                                    <span className={objStyle.location_country}>
                                        {"user.location.country"}
                                    </span>
                                    <span className={objStyle.location_city}>
                                        {"user.location.city"}
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
                    onClick={() => setUsersAC(this.props.users)}
                    className={objStyle.addUsers}
                >
                    Add Users
                </button>
            </main>
        );
    }
}
