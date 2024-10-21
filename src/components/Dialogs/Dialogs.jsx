import React, { useState, createRef } from "react";
import objStyle from "./Dialogs.module.css";

import { Contact } from "./ContactItem/Contact";
import { Message } from "./MessagesAsk/MessagesAsk";
import { MessageAnswer } from "./MassageAnswer/MessageAnswer";
import {
    sendMessageCreator,
    updateNewMessageBodyCreator,
} from "../../redux/state";

export const Dialogs = (props) => {
	const state = props.store.getState().messagesPage;
    const onSendMessageClick = () => {
        let action = sendMessageCreator("SEND_MESSAGE");
        props.store.dispatch(action);
    };
    const onMessageChange = (e) => {
        let body = e.target.value;
        const action = updateNewMessageBodyCreator(
            "UPDATE_NEW_MESSAGE_BODY",
            body
        );
        props.store.dispatch(action);
    };
    const dialogsElements = state.dialogs.map((d, ind) => (
            <Contact
                key={ind}
                name={d.name}
                address={d.id}
                data={d.data}
                url={d.url}
            />
        ));
    const messagesElementsAsk = state.messageAsk.map((m, ind) => (
            <Message
                key={ind}
                author={m.author}
                text={m.text}
                id={m.id}
                url={m.url}
                data={m.data}
            />
        ));
    const messagesElementsAnswer =  state.messageAnswer.map((m, ind) => (
            <MessageAnswer
                key={ind}
                author={m.author}
                text={m.text}
                id={m.id}
                url={m.url}
                data={m.data}
            />
        ));
		const newMessageBody = state.newTextBody;
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
                        placeholder="Enter Your Message"
                        onChange={(e) => onMessageChange(e)}
                        value={newMessageBody}
                        className={objStyle.inputText}
                        id=""
                    />
                    <button
                        className={objStyle.sendText}
                        onClick={(e) => {
                            e.preventDefault();
                            onSendMessageClick();
                        }}
                    >
                        Send
                    </button>
                </form>
            </div>
        </main>
    );
};
