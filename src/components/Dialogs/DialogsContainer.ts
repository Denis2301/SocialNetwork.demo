import { sendMessage } from './../../redux/messageReducer';
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirectComponent } from "../../hoc/LoginHOCRedirect";
import { compose } from "redux";
import { AppStateType } from '@/redux/redux-store';

type MapDispatchPropsType = {
	sendMessage: (message: string) => void
}
const mapStateToProps = (state: AppStateType) => {
    return {
        messagesPage: state.messagesPage,
        messageAsk: state.messagesPage.messageAsk,
        messageAnswer: state.messagesPage.messageAnswer,
    };
};

export default compose(
    // TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultRootState
    connect<{}, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {
        sendMessage,
    }),
    withAuthRedirectComponent
)(Dialogs);
