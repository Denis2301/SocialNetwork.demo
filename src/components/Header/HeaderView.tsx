import React, { FC } from "react";
import objStyle from "./Header.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import userPhoto from "../../assets/images/user.png";

type HeaderViewType = {
    login: string | null;
    photo: string | null;
    menuInd: number;
    handleMenuView: () => void;
    logOutMe: () => void;
};
export const HeaderView: FC<HeaderViewType> = ({
    photo,
    login,
    logOutMe,
    menuInd,
    handleMenuView,
}) => {
    let navigate = useNavigate();
    return (
        <header className={objStyle.header}>
            <div className={objStyle.header__wrapper}>
                <div className={objStyle.login}>
                    <img src={photo || userPhoto} alt={login || undefined} />
                    <button
                        className={objStyle.logout}
                        onClick={() => {
                            logOutMe();
                            navigate("/login");
                        }}
                    >
                        OUT
                    </button>
                </div>

                <div
                    className={`${objStyle.menuBurger} ${
                        menuInd ? objStyle.menuBurger_active : ""
                    }`}
                    onClick={() => handleMenuView()}
                >
                    <span></span>
                </div>
            </div>
        </header>
    );
};
