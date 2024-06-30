import React, { useState } from "react";
import objStyle from "./Dialogs.module.css";

import { Contact } from "./ContactItem/Contact";
import { Message } from "./MessageItem/Message";


export const Dialogs = (props) => {
    const isActive = ({ isActive }) => (isActive ? objStyle.activeLink : "");
    
    const dialogsElements = props.dialogs.map((d, ind) => (
        <Contact key={ind} name={d.name} address={d.id} isActive={isActive} />
    ));

    const messagesElements = props.messages.map((m, ind) => (
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
