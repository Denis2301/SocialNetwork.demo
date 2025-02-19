import React from "react";
import objStyle from "./Header.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import userPhoto from "../../assets/images/user.png";
export const HeaderView = (props) => {
    let navigate = useNavigate();
    return (
        <header className={objStyle.header}>
            <div className={objStyle.header__wrapper}>
                <div className={objStyle.login}>
                    <img src={props.photo || userPhoto} alt={props.login} />
                    <button
                        className={objStyle.logout}
                        onClick={() => {
                            props.logOutMe();
                            navigate("/login");
                        }}
                    >
                        OUT
                    </button>
                </div>

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
