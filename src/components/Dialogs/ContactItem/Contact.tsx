import { FC } from "react";
import objStyle from "./Contact.module.css";
import { NavLink } from "react-router-dom";
import { DateType } from "@/types/types";

type ContactType = {
    url: string;
    key: number;
    name: string;
    address: number;
    data: DateType;
};
export const Contact: FC<ContactType> = ({ key, name, address, data, url }) => {
    const isActive = (navData: { isActive: boolean }): string =>
        navData.isActive ? objStyle.activeLink : "";
    return (
        <div key={key}>
            <li className={objStyle.dialog}>
                <div>
                    <div className={objStyle.contacts_itemImg}>
                        <img src={url} alt="avatar" />
                        <span className={objStyle.data}>
                            {data.year}.{data.month}.{data.date}
                        </span>
                    </div>
                    <NavLink
                        className={(navData) =>
                            `${isActive(navData)} ${objStyle.name}`
                        }
                        to={"/dialogs/" + address}
                    >
                        {name}
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
                                    `Сообщение с id ${address} помечено как спам`
                                )
                            }
                        />
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/3687/3687412.png"
                            alt="delete user"
                            className={objStyle.delete}
                            onClick={(e) =>
                                console.log(`Сообщение с id ${address} удалено`)
                            }
                        />
                    </div>
                </div>
            </li>
        </div>
    );
};
