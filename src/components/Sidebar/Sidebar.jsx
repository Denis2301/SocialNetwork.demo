import { useState } from "react";
import React from "react";
import objStyle from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";

export const Sidebar = ({ state, menuInd }) => {
    const isActive = (navData) => (navData.isActive ? objStyle.activeLink : "");
    const friends = state.friends.map((el) => {
        return (
            <div className={objStyle.friend__one}>
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
                menuInd == true ? objStyle.sidebar_active : ""
            }`}
        >
            <ul className={objStyle.menu}>
                <li className={objStyle.item}>
                    <NavLink className={isActive} to="/profile">
                        Profile
                    </NavLink>
                </li>
                <li className={objStyle.item}>
                    <NavLink className={isActive} to="/dialogs">
                        Messages
                    </NavLink>
                </li>
                <li className={objStyle.item}>
                    <NavLink className={isActive} to="/news">
                        News
                    </NavLink>
                </li>
                <li className={objStyle.item}>
                    <NavLink className={isActive} to="/music">
                        Music
                    </NavLink>
                </li>
            </ul>
            <hr />
            <NavLink className={isActive} to="settings/">
                <p className={objStyle.settings}>Settings</p>
            </NavLink>
            <div className={objStyle.friends}>
                <hr />
                <a href="" className={objStyle.friends__title}>
                    Friends
                </a>
                <div className={objStyle.friends__block}>{friends}</div>
            </div>
        </nav>
    );
};
