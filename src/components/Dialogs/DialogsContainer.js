import { sendMessage} from "../../redux/messageReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirectComponent } from "../../hoc/LoginHOCRedirect";
import { compose } from "redux";

const mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
        messageAsk: state.messagesPage.messageAsk,
        messageAnswer: state.messagesPage.messageAnswer,
        newTextBody: state.messagesPage.newTextBody,
    };
};

export default compose(
    connect(mapStateToProps, {
        sendMessage,
    }),
    withAuthRedirectComponent
)(Dialogs);
