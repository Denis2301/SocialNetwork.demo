import React, { useState, createRef, useRef, useEffect } from "react";
import objStyle from "./Dialogs.module.css";

import { Contact } from "./ContactItem/Contact";
import { Message } from "./MessagesAsk/MessagesAsk";
import { MessageAnswer } from "./MassageAnswer/MessageAnswer";

const Dialogs = ({
    sendMessage,
    updateNewMessageBody,
    messagesPage,
    messageAsk,
    messageAnswer,
    newTextBody,
}) => {
    let textDialog = useRef();
    const onSendMessage = () => {
        sendMessage();
    };
    const onMessageChange = () => {
        updateNewMessageBody(textDialog.current.value);
    };
    const dialogsElements = messagesPage.dialogs.map((d, ind) => (
        <Contact
            key={ind}
            name={d.name}
            address={d.id}
            data={d.data}
            url={d.url}
        />
    ));
    const messagesElementsAsk = messageAsk.map((m, ind) => (
        <Message
            key={ind}
            author={m.author}
            text={m.text}
            id={m.id}
            url={m.url}
            data={m.data}
        />
    ));
    const messagesElementsAnswer = messageAnswer.map((m, ind) => (
        <MessageAnswer
            key={ind}
            author={m.author}
            text={m.text}
            id={m.id}
            url={m.url}
            data={m.data}
        />
    ));
    const newMessageBody = newTextBody;

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
                        ref={textDialog}
                        placeholder="Enter Your Message"
                        onChange={onMessageChange}
                        value={newMessageBody}
                        className={objStyle.inputText}
                    />
                    <button
                        className={objStyle.sendText}
                        onClick={(e) => {
                            e.preventDefault();
                            onSendMessage();
                        }}
                    >
                        Send
                    </button>
                </form>
            </div>
        </main>
    );
};

export default Dialogs;