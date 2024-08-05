import React, { useState } from "react";
import objStyle from "./Dialogs.module.css";

import { Contact } from "./ContactItem/Contact";
import { Message } from "./MessagesAsk/MessagesAsk";
import { MessageAnswer } from "./MassageAnswer/MessageAnswer";
export const Dialogs = (props) => {
    const isActive = ({ isActive }) => (isActive ? objStyle.activeLink : "");
    const dialogsElements = props.state.dialogs.map((d, ind) => (
        <Contact
            key={ind}
            name={d.name}
            address={d.id}
            data={d.data}
            url={d.url}
            isActive={isActive}
        />
    ));

    const messagesElements = props.state.messageAsk.map((m, ind) => (
        <Message
            key={ind}
            author={m.author}
            text={m.text}
            id={m.id}
            url={m.url}
            data={m.data}
        />
    ));
    const messagesElementsAnswer = props.state.messageAnswer.map((m, ind) => (
        <MessageAnswer
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
                <div className={objStyle.dialogs_name}>
                    <ul>{dialogsElements}</ul>
                </div>
                <div className={objStyle.dialogs_messages_ask}>
                    {messagesElements}
                </div>
                <div className={objStyle.dialogs_messages_answer}>
                    {messagesElementsAnswer}
                </div>
            </section>
        </main>
    );
};
