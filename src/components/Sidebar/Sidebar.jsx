import React from "react";
import objStyle from "./Sidebar.module.css";

export const Sidebar = ({ menuInd }) => {
    return (
        <nav
            className={`${objStyle.sidebar} ${
                menuInd == true ? objStyle.sidebar_active : ""
            }`}
        >
            <ul className={objStyle.menu}>
                <li className={objStyle.item}>
                    <a href="">Profile</a>
                </li>
                <li>
                    <a href="">Messages</a>
                </li>
                <li>
                    <a href="">News</a>
                </li>
                <li>
                    <a href="">Music</a>
                </li>
            </ul>
            <hr />
            <a href="" className={objStyle.settings}>
                Settings
            </a>
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
