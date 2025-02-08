import React from "react";
import objStyle from "./Header.module.css";
import { NavLink } from "react-router-dom";
import userPhoto from "../../assets/images/user.png";
export const HeaderView = (props) => {
    return (
        <header className={objStyle.header}>
            <div className={objStyle.header__wrapper}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0qCreqkTZL0F0bF9kZctFE1XVFocO__70kw&usqp=CAU"
                    alt="site-logo"
                />
                {props.isAuth && (
                    <div className={objStyle.login}>
                        <img
                            src={props.photo || userPhoto}
                            alt={props.login}
                        ></img>
                        <button className={objStyle.logout} onClick={() => props.logOutMe()}>OUT</button>
                    </div>
                )}
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
