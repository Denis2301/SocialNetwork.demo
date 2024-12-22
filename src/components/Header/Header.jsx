import React from "react";
import objStyle from "./Header.module.css";

export const Header = (props) => {
    return (
        <header className={objStyle.header}>
            <div className={objStyle.header__wrapper}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0qCreqkTZL0F0bF9kZctFE1XVFocO__70kw&usqp=CAU"
                    alt="site-logo"
                    className=""
                />
                <div
                    className={`${objStyle.menuBurger} ${
                        props.menuInd ? objStyle.menuBurger_active : ""
                    }`}
                    onClick={() => props.handleMenuView()}
                >
                    <span></span>
                </div>
            </div>
        </header>
    );
};
