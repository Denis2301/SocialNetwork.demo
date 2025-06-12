import { DialogsType, MessageType, actions } from "../../redux/messageReducer";
import { AppStateType } from "../../redux/redux-store";
import { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../utils/validators";
import { GetStringKeys, Textarea } from "../common/FormsControls/FormsControls";
import { Contact } from "./ContactItem/Contact";
import objStyle from "./Dialogs.module.css";
import { MessageAnswer } from "./MassageAnswer/MessageAnswer";
import { MessageAsk } from "./MessagesAsk/MessagesAsk";
const maxLength50 = maxLengthCreator(50);
type NewMessageFormValuesType = {
    message: string;
};
type NewMessageFormValuesTypeKeys = GetStringKeys<NewMessageFormValuesType>;
type OwnPropsType = {};
let AddMessageForm: FC<
    InjectedFormProps<NewMessageFormValuesType, OwnPropsType> & OwnPropsType
> = ({ handleSubmit, error }) => {
    return (
        <form onSubmit={handleSubmit}>
            <Field
                validate={[required, maxLength50]}
                component={Textarea}
                placeholder="Enter Your Message"
                name="message"
                style={{
                    display: "inlineBlock",
                    width: "100%",
                    height: "60px",
                    marginBlock: "50px 10px",
                    padding: "10px",
                }}
            />
            <button className={objStyle.sendText}>Send</button>
        </form>
    );
};

const AddMessageFormReduxForm = reduxForm<
    NewMessageFormValuesType,
    OwnPropsType
>({
    form: "dialogMessageForm",
})(AddMessageForm);
const DialogsPage: FC = () => {
    const dialogs: Array<DialogsType> = useSelector(
        (state: AppStateType) => state.messagesPage.dialogs
    );
    const messageAsk: Array<MessageType> = useSelector(
        (state: AppStateType) => state.messagesPage.messageAsk
    );
    const messageAnswer: Array<MessageType> = useSelector(
        (state: AppStateType) => state.messagesPage.messageAnswer
    );
    const isAuth = useSelector((state: AppStateType) => state.auth.isAuth);
    let navigate = useNavigate();
    useEffect(() => {
        if (!isAuth) {
            return navigate("/login");
        }
    }, []);
    const dialogsElements = dialogs.map((d, ind) => (
        <Contact
            key={ind}
            name={d.name}
            address={d.id}
            data={d.data}
            url={d.url}
        />
    ));
    const messagesElementsAsk = messageAsk.map((m, ind) => (
        <MessageAsk
            key={ind}
            author={m.author}
            text={m.text}
            url={m.url}
            data={m.data}
        />
    ));
    const messagesElementsAnswer = messageAnswer.map((m, ind) => (
        <MessageAnswer
            key={ind}
            author={m.author}
            text={m.text}
            url={m.url}
            data={m.data}
        />
    ));
    const onSubmit = async (formData: NewMessageFormValuesType) => {
        actions.sendMessage(formData.message);
    };
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
                <AddMessageFormReduxForm onSubmit={onSubmit} />
            </div>
        </main>
    );
};

export default DialogsPage;
