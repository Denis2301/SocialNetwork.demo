import React from "react";
import objStyle from "./Header.module.css";

export const Header = () => {
    return (
        <header className={objStyle.header}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0qCreqkTZL0F0bF9kZctFE1XVFocO__70kw&usqp=CAU"
                alt="site-logo"
                className=""
            />
        </header>
    );
};
