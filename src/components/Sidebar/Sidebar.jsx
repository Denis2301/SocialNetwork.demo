import { useState } from "react";
import React from "react";
import objStyle from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";

export const Sidebar = ({ sidebar, menuInd, handleMenuView, onSend }) => {
    const onSendClick = () => {
        onSend("SIDEBAR");
    };
    const isActive = (navData) => (navData.isActive ? objStyle.activeLink : "");
    const friends = sidebar.friends.map((el) => {
        return (
            <div
                className={objStyle.friend__one}
                key={el.id}
                onClick={() => onSendClick()}
            >
                <div className={objStyle.friend__image}>
                    <img src={el.url} />
                </div>
                <a href="" className={objStyle.friend__name}>
                    {el.name}
                </a>
            </div>
        );
    });
    return (
        <nav
            className={`${objStyle.sidebar} ${
                menuInd == true ? objStyle.sidebar_active : objStyle.sidebar
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
                <div className={objStyle.friends__block}>{friends}</div>
            </div>
        </nav>
    );
};
