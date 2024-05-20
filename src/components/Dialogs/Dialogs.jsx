import React, { useState } from "react";
import objStyle from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

export const Dialogs = (props) => {
    const [isDelete1, setDelete1] = useState(true);
    const [isBlock1, setBlock1] = useState(true);
    const [isDelete2, setDelete2] = useState(true);
    const isActive = ({ isActive }) => (isActive ? objStyle.activeLink : "");
    return (
        <main
            aria-labelledby={objStyle.page_dialogs}
            className={objStyle.content}
        >
            <h1 id={objStyle.page_dialogs}>Dialogs</h1>
            <section className={objStyle.wrapper__dialogs_contact}>
                <div className={objStyle.dialogs_contact__name}>
                    <ul>
                        {isDelete1 && (
                            <li className={objStyle.dialog}>
                                <div>
                                    <NavLink
                                        className={isActive}
                                        to="/dialogs/1"
                                    >
                                        Andrew
                                    </NavLink>
                                    <img
                                        src="https://static.vecteezy.com/system/resources/previews/019/994/475/non_2x/close-icon-vector.jpg"
                                        alt="block user"
                                        className={objStyle.block}
                                        onClick={(e) => setBlock1(false)}
                                    />
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/3687/3687412.png"
                                        alt="delete user"
                                        className={objStyle.delete}
                                        onClick={(e) => setDelete1(false)}
                                    />
                                </div>
                            </li>
                        )}
                        {isDelete2 && (
                            <li className={objStyle.dialog}>
                                <div>
                                    <NavLink
                                        className={isActive}
                                        to="/dialogs/2"
                                    >
                                        Dmitry
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
                                    />
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/3687/3687412.png"
                                        alt="delete user"
                                        className={objStyle.delete}
                                        onClick={(e) => setDelete2(false)}
                                    />
                                </div>
                            </li>
                        )}
                        {isDelete1 && (
                            <li className={objStyle.dialog}>
                                <div>
                                    <NavLink
                                        className={isActive}
                                        to="/dialogs/3"
                                    >
                                        Sasha
                                    </NavLink>
                                    <img
                                        src="https://static.vecteezy.com/system/resources/previews/019/994/475/non_2x/close-icon-vector.jpg"
                                        alt="block user"
                                        className={objStyle.block}
                                        onClick={(e) => setBlock1(false)}
                                    />
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/3687/3687412.png"
                                        alt="delete user"
                                        className={objStyle.delete}
                                        onClick={(e) => setDelete1(false)}
                                    />
                                </div>
                            </li>
                        )}
                    </ul>
                </div>
                <div className={objStyle.dialogs_contact__messages}>
                    <div className={objStyle.contact__messages_item}>
                        <div className={objStyle.messages_itemImg}>
                            <img
                                src="https://w7.pngwing.com/pngs/851/967/png-transparent-cat-computer-icons-creative-cat-mammal-cat-like-mammal-animals-thumbnail.png"
                                alt="avatar"
                            />
                            <span id={objStyle.messages_item__author}>
                                Dmitry
                            </span>
                        </div>
                        <div className={objStyle.massages_itemText}>
                            <p>
                                {" "}
                                I am a normal popove Lorem ipsum dolor sit amet
                                consectetur adipisicing elit. Aliquid quod
                                distinc distinctio vel, voluptatum ducimus
                                libero. Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Consectetur ipsam eos quod
                                voluptas ducimus et dolore modi excepturi odit,
                                harum sapiente ad reiciendis dolor! Ipsam at
                                dicta earum architecto nulla possimus officia
                                corporis doloremque facilis repudiandae dolor
                                tempore libero nobis, voluptatum fugit sint vero
                                perferendis ex repellendus perspiciatis numquam
                                similique.
                            </p>
                        </div>
                    </div>
                    <div className={objStyle.contact__messages_item}>
                        <div className={objStyle.messages_itemImg}>
                            <img
                                src="https://w7.pngwing.com/pngs/851/967/png-transparent-cat-computer-icons-creative-cat-mammal-cat-like-mammal-animals-thumbnail.png"
                                alt="avatar"
                            />
                            <span id={objStyle.messages_item__author}>Me</span>
                        </div>
                        <div className={objStyle.massages_itemText}>
                            <p>
                                {" "}
                                I am a normal popove Lorem ipsum dolor sit amet
                                consectetur adipisicing elit. Aliquid quod
                                distinc distinctio vel, voluptatum ducimus
                                libero.
                            </p>
                        </div>
                    </div>
                    <div className={objStyle.contact__messages_item}>
                        <div className={objStyle.messages_itemImg}>
                            <img
                                src="https://w7.pngwing.com/pngs/851/967/png-transparent-cat-computer-icons-creative-cat-mammal-cat-like-mammal-animals-thumbnail.png"
                                alt="avatar"
                            />
                            <span id={objStyle.messages_item__author}>Me</span>
                        </div>
                        <div className={objStyle.massages_itemText}>
                            <p>
                                {" "}
                                I am a normal popove Lorem ipsum dolor sit amet
                                consectetur adipisicing elit. Aliquid quod
                                distinc distinctio vel, voluptatum ducimus
                                libero.
                            </p>
                        </div>
                    </div>
                    <div className={objStyle.contact__messages_item}>
                        <div className={objStyle.messages_itemImg}>
                            <img
                                src="https://w7.pngwing.com/pngs/851/967/png-transparent-cat-computer-icons-creative-cat-mammal-cat-like-mammal-animals-thumbnail.png"
                                alt="avatar"
                            />
                            <span id={objStyle.messages_item__author}>
                                Dmitry
                            </span>
                        </div>
                        <div className={objStyle.massages_itemText}>
                            <p>
                                {" "}
                                I am a normal popove Lorem ipsum dolor sit amet
                                consectetur adipisicing elit. Aliquid quod
                                distinc distinctio vel, voluptatum ducimus
                                libero.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};
