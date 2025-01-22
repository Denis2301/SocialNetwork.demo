import { sendMessage, updateNewMessageBody } from "../../redux/messageReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirectComponent } from "../../hoc/LoginHOCRedirect";


const mapStateToDialogsProps = (state) => {
    return {
        messagesPage: state.messagesPage,
        messageAsk: state.messagesPage.messageAsk,
        messageAnswer: state.messagesPage.messageAnswer,
        newTextBody: state.messagesPage.newTextBody,
    };
};

export const DialogsContainer = withAuthRedirectComponent(connect(mapStateToDialogsProps, {
    sendMessage,
    updateNewMessageBody,
})(Dialogs));
