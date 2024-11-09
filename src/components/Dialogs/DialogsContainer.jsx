import React from "react";
import {
    sendMessageCreator,
    updateNewMessageBodyCreator,
} from "../../redux/messageReducer";
import { Dialogs } from "./Dialogs";
export const DialogsContainer = ({ store }) => {
	const state = store.getState();
    const onSendMessageClick = () => {
        let action = sendMessageCreator("SEND_MESSAGE");
        store.dispatch(action);
    };
    const onMessageChangeText = (body) => {
        const action = updateNewMessageBodyCreator(
            "UPDATE_NEW_MESSAGE_BODY",
            body
        );
        store.dispatch(action);
    };

    return <Dialogs
            onSendMessageClick={onSendMessageClick}
            onMessageChangeText={onMessageChangeText}
            messagesPage={state.messagesPage}
            messageAsk={state.messagesPage.messageAsk}
            messageAnswer={state.messagesPage.messageAnswer}
            newTextBody={state.messagesPage.newTextBody}
        />
    
};
