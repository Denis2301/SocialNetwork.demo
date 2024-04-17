import React from "react";
import objStyle from "./Sidebar.module.css";

export const Sidebar = () => {
    return (
        <nav className={objStyle.sidebar}>
            <ul className={objStyle.menu}>
                <li className={objStyle.item}>
                    <a href="">Profile</a>
                </li>
                <li className={objStyle.item}>
                    <a href="">Messages</a>
                </li>
                <li className={objStyle.item}>
                    <a href="">News</a>
                </li>
                <li className={objStyle.item}>
                    <a href="">Music</a>
                </li>
            </ul>
            <hr />
            <a href="" className={`${objStyle.settings} ${objStyle.item}`}>
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
