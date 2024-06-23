import React, { useState } from "react";
import objStyle from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const Contact = (props) => {
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
const Message = (props) => {
    return (
        <div className={objStyle.contact__messages_item}>
            <div className={objStyle.messages_itemImg}>
                <img src={props.url} alt="avatar" />
                <span id={objStyle.messages_item__author}>{props.author}</span>
                <span className={objStyle.data}>
                    {props.data.year}.{props.data.month}.{props.data.date}
                </span>
            </div>
            <div className={objStyle.massages_itemText}>
                <p>{props.text}</p>
            </div>
        </div>
    );
};

export const Dialogs = (props) => {
    const isActive = ({ isActive }) => (isActive ? objStyle.activeLink : "");
    const dialogs = [
        { id: 1, name: "Dmitry" },
        { id: 2, name: "Sasha" },
        { id: 3, name: "Andrew" },
    ];
    const messages = [
        {
            author: "Dmitry",
            text: "I am a normal popove Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quod distinc distinctio vel, voluptatum ducimus libero.",
            id: 1,
            url: "https://w7.pngwing.com/pngs/851/967/png-transparent-cat-computer-icons-creative-cat-mammal-cat-like-mammal-animals-thumbnail.png",
            data: {
                year: new Date().getFullYear(),
                month: new Date().getMonth(),
                date: new Date().getDate(),
            },
        },
        {
            author: "Sasha",
            text: "I am a normal popove Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quod distinc distinctio vel, voluptatum ducimus libero.",
            id: 2,
            url: "https://w7.pngwing.com/pngs/851/967/png-transparent-cat-computer-icons-creative-cat-mammal-cat-like-mammal-animals-thumbnail.png",
            data: {
                year: new Date().getFullYear(),
                month: new Date().getMonth(),
                date: new Date().getDate(),
            },
        },
        {
            author: "Andrew",
            text: "I am a normal popove Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quod distinc distinctio vel, voluptatum ducimus libero.",
            id: 3,
            url: "https://w7.pngwing.com/pngs/851/967/png-transparent-cat-computer-icons-creative-cat-mammal-cat-like-mammal-animals-thumbnail.png",
            data: {
                year: new Date().getFullYear(),
                month: new Date().getMonth(),
                date: new Date().getDate(),
            },
        },
    ];
    const dialogsElements = dialogs.map((d, ind) => (
        <Contact key={ind} name={d.name} address={d.id} isActive={isActive} />
    ));

    const messagesElements = messages.map((m, ind) => (
        <Message
            key={ind}
            author={m.author}
            text={m.text}
            id={m.id}
            url={m.url}
            data={m.data}
        />
    ));
    return (
        <main
            aria-labelledby={objStyle.page_dialogs}
            className={objStyle.content}
        >
            <h1 id={objStyle.page_dialogs}>Dialogs</h1>
            <section className={objStyle.wrapper__dialogs_contact}>
                <div className={objStyle.dialogs_contact__name}>
                    <ul>{dialogsElements}</ul>
                </div>
                <div className={objStyle.dialogs_contact__messages}>
                    {messagesElements}
                </div>
            </section>
        </main>
    );
};
