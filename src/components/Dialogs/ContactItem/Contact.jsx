import objStyle from "../Dialogs.module.css";
import { NavLink } from "react-router-dom";
export const Contact = (props) => {
    return (
        <>
            <li className={objStyle.dialog}>
                <div>
                    <NavLink
                        className={props.isActive}
                        to={"/dialogs/" + props.address}
                    >
                        {props.name}
                    </NavLink>
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
            </li>
        </>
    );
};


