import React from "react";
import {
    sendMessageCreator,
    updateNewMessageBodyCreator,
} from "../../redux/messageReducer";
import { Dialogs } from "./Dialogs";
import { connect } from "react-redux";


const mapStateToDialogsProps = (state) => {
    return {
        messagesPage: state.messagesPage,
        messageAsk: state.messagesPage.messageAsk,
        messageAnswer: state.messagesPage.messageAnswer,
        newTextBody: state.messagesPage.newTextBody,
    };
};
const mapDispatchToDialogsProps = () => {
    return {
        onSendMessageClick: (dispatch) => {
            let action = sendMessageCreator("SEND_MESSAGE");
            dispatch(action);
        },
        onMessageChangeText: (body, dispatch) => {
            const action = updateNewMessageBodyCreator(
                "UPDATE_NEW_MESSAGE_BODY",
                body
            );
            dispatch(action);
        },
    };
};
export const DialogsContainer = connect(
    mapStateToDialogsProps,
    mapDispatchToDialogsProps
)(Dialogs);
