import React, { useState, createRef } from "react";
import objStyle from "./Dialogs.module.css";

import { Contact } from "./ContactItem/Contact";
import { Message } from "./MessagesAsk/MessagesAsk";
import { MessageAnswer } from "./MassageAnswer/MessageAnswer";

export const Dialogs = (props) => {
    const isActive = ({ isActive }) => (isActive ? objStyle.activeLink : "");
    const inputText = createRef("");
    const sendTextMessage = () => {
        props.sendTextMessage();
    };
    const onMessageChange = () => {
        props.updateNewTextMessage(inputText.current.value);
    };
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

    const messagesElementsAsk = props.state.messageAsk.map((m, ind) => (
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
                    {messagesElementsAsk}
                </div>
                <div className={objStyle.dialogs_messages_answer}>
                    {messagesElementsAnswer}
                </div>
            </section>
            <div className={objStyle.textDialog}>
                <form action="">
                    <textarea
                        onChange={onMessageChange}
                        value={props.newTextMessage}
                        name=""
                        ref={inputText}
                        className={objStyle.inputText}
                        id=""
                        cols="30"
                        rows="10"
                    />
                    <button
                        className={objStyle.sendText}
                        onClick={(e) => {
                            e.preventDefault();
                            sendTextMessage();
                        }}
                    >
                        Text Dialog
                    </button>
                </form>
            </div>
        </main>
    );
};
