import { FC, useEffect } from "react";
import objStyle from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";
import { UserType } from "../../types/types";

type SidebarPropsType = {
    friends: Array<UserType>;
    menuInd: boolean;
    handleMenuView: () => void;
    requestFriends: () => void;
};
export const Sidebar: FC<SidebarPropsType> = ({
    friends,
    menuInd,
    handleMenuView,
    requestFriends,
}) => {
    useEffect(() => {
        requestFriends();
    }, []);
    const onSendClick = () => {};
    const isActive = (navData: any) =>
        navData.isActive ? objStyle.activeLink : "";

    return (
        <nav
            className={`${objStyle.sidebar} ${
                menuInd ? objStyle.sidebar_active : objStyle.sidebar
            }`}
        >
            <ul className={objStyle.menu}>
                <li className={objStyle.item}>
                    <NavLink
                        onClick={() => handleMenuView()}
                        className={(navData) => isActive(navData)}
                        to="/profile"
                    >
                        Profile
                    </NavLink>
                </li>
                <li className={objStyle.item}>
                    <NavLink
                        onClick={() => handleMenuView()}
                        className={isActive}
                        to="/dialogs"
                    >
                        Messages
                    </NavLink>
                </li>
                <li className={objStyle.item}>
                    <NavLink
                        onClick={() => handleMenuView()}
                        className={isActive}
                        to="/news"
                    >
                        News
                    </NavLink>
                </li>
                <li className={objStyle.item}>
                    <NavLink
                        onClick={() => handleMenuView()}
                        className={isActive}
                        to="/music"
                    >
                        Music
                    </NavLink>
                </li>
            </ul>
            <hr />
            <NavLink
                onClick={() => handleMenuView()}
                className={isActive}
                to="settings/"
            >
                <p className={objStyle.settings}>Settings</p>
            </NavLink>
            <br />
            <hr />
            <NavLink
                onClick={() => handleMenuView()}
                className={(navData) => isActive(navData)}
                to="users/"
            >
                <p className={objStyle.users}>Find users</p>
            </NavLink>
            <hr />
            <div className={objStyle.friends}>
                <a href="" className={objStyle.friends__title}>
                    Friends
                </a>
                <div className={objStyle.friends__block}>
                    {friends.map((el) => {
                        return (
                            <div
                                className={objStyle.friend__one}
                                key={el.id}
                                onClick={() => onSendClick()}
                            >
                                <div className={objStyle.friend__image}>
                                    <img src={el.photos.small} />
                                </div>
                                <a href="" className={objStyle.friend__name}>
                                    {el.name.length >= 5
                                        ? el.name.slice(0, 6)
                                        : el.name}
                                </a>
                            </div>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
};
