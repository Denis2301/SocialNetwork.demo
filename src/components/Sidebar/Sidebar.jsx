import { useState } from "react";
import React from "react";
import objStyle from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";

export const Sidebar = ({ menuInd }) => {
    const [activeLink, addClassColor] = useState("");
    return (
        <nav
            className={`${objStyle.sidebar} ${
                menuInd == true ? objStyle.sidebar_active : ""
            }`}
        >
            <ul className={objStyle.menu}>
                <li className={objStyle.item}>
                    <NavLink
                        className={
                            activeLink == "profile" ? objStyle._active : ""
                        }
                        to="/profile"
                        onClick={(e) => {
                            addClassColor("profile");
                        }}
                    >
                        Profile
                    </NavLink>
                </li>
                <li className={objStyle.item}>
                    <NavLink
                        className={
                            activeLink == "dialogs" ? objStyle._active : ""
                        }
                        to="/dialogs"
                        onClick={(e) => {
                            addClassColor("dialogs");
                        }}
                    >
                        Messages
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={activeLink == "news" ? objStyle._active : ""}
                        to="/news"
                        onClick={(e) => {
                            addClassColor("news");
                        }}
                    >
                        News
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={
                            activeLink == "music" ? objStyle._active : ""
                        }
                        to="/music"
                        onClick={(e) => {
                            addClassColor("music");
                        }}
                    >
                        Music
                    </NavLink>
                </li>
            </ul>
            <hr />
            <NavLink
                to="/settings"
                onClick={(e) => {
                    addClassColor("settings");
                }}
                className={`${objStyle.settings} ${
                    activeLink == "settings" ? objStyle._active : ""
                }`}
            >
                Settings
            </NavLink>
            <div className={objStyle.friends}>
                <hr />
                <a href="" className={objStyle.friends__title}>
                    Friends
                </a>
                <div className={objStyle.friends__block}>
                    <div className={objStyle.friend__one}>
                        <div className={objStyle.friend__image}></div>
                        <a href="" className={objStyle.friend__name}>
                            Andrew
                        </a>
                    </div>
                    <div className={objStyle.friend}>
                        <div className={objStyle.friend__image}></div>
                        <a href="" className={objStyle.friend__name}>
                            Sasha
                        </a>
                    </div>
                    <div className={objStyle.friend__three}>
                        <div className={objStyle.friend__image}></div>
                        <a href="" className={objStyle.friend__name}>
                            Sveta
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};
