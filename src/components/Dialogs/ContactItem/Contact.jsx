import objStyle from "./Contact.module.css";
import { NavLink } from "react-router-dom";
export const Contact = (props) => {
    const isActive = (navData) =>
        navData.isActive ? objStyle.activeLink : "";
    return (
        <>
            <li className={objStyle.dialog}>
                <div>
                    <div className={objStyle.contacts_itemImg}>
                        <img src={props.url} alt="avatar" />
                        <span className={objStyle.data}>
                            {props.data.year}.{props.data.month}.
                            {props.data.date}
                        </span>
                    </div>
                    <NavLink
                        className={(navData) => `${isActive(navData)} ${
                            objStyle.name
                        }`}
                        to={"/dialogs/" + props.address}
                    >
                        {props.name}
                    </NavLink>
                    <div className={objStyle.correct_friends}>
                        <img
                            src="https://c0.klipartz.com/pngpicture/891/369/sticker-png-wifi-hacker-prank-wi-fi-hotspot-android-security-hacker-net-mobile-phones-internet.png"
                            alt="online"
                            className={objStyle.online}
                        />
                        <img
                            src="https://static.vecteezy.com/system/resources/previews/019/994/475/non_2x/close-icon-vector.jpg"
                            alt="block user"
                            className={objStyle.block}
                            onClick={(e) =>
                                console.log(
                                    `Сообщение с id ${props.address} помечено как спам`
                                )
                            }
                        />
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/3687/3687412.png"
                            alt="delete user"
                            className={objStyle.delete}
                            onClick={(e) =>
                                console.log(
                                    `Сообщение с id ${props.address} удалено`
                                )
                            }
                        />
                    </div>
                </div>
            </li>
        </>
    );
};
