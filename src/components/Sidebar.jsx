import React from "react";
export const Sidebar = () => {
    return (
        <nav className="sidebar">
            <ul className="menu">
                <li>
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
            <a href="" className="settings">
                Settings
            </a>
            <div className="friends">
                <a href="" className="friends-title">
                    Friends
                </a>
                <div className="friends-block">
                    <div className="friend__one">
                        <div className="friend-image"></div>
                        <a href="" className="friend-name">
                            Andrew
                        </a>
                    </div>
                    <div className="friend__two">
                        <div className="friend-image"></div>
                        <a href="" className="friend-name">
                            Sasha
                        </a>
                    </div>
                    <div className="friend__three">
                        <div className="friend-image"></div>
                        <a href="" className="friend-name">
                            Sveta
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};
