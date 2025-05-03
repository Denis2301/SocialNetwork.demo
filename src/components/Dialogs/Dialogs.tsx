import objStyle from "./Dialogs.module.css";
import { maxLengthCreator, required } from "../../utils/validators";
import { Contact } from "./ContactItem/Contact";
import { MessageAsk } from "./MessagesAsk/MessagesAsk";
import { MessageAnswer } from "./MassageAnswer/MessageAnswer";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { Textarea } from "../common/FormsControls/FormsControls";
import { FC } from "react";
import { DialogsType, MessageType } from "@/redux/messageReducer";

const maxLength50 = maxLengthCreator(50);
type AddMessageFormValuesTypes = {
    message: string;
};

let AddMessageForm: FC<
    InjectedFormProps<AddMessageFormValuesTypes, {}> & {}
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

type MyStateDialogsType = {
    dialogs: Array<DialogsType>;
    messageAnswer: Array<MessageType>;
    messageAsk: Array<MessageType>;
};
type MyDispatchDialogsType = {
    sendMessage: (message: string) => void;
};
type PropsType = MyStateDialogsType & MyDispatchDialogsType;

const AddMessageFormReduxForm = reduxForm<AddMessageFormValuesTypes, {}>({
    form: "dialogMessageForm",
})(AddMessageForm);
const Dialogs: FC<PropsType> = ({
    sendMessage,
    dialogs,
    messageAsk,
    messageAnswer,
}) => {
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
    const onSubmit = async (formData: AddMessageFormValuesTypes) => {
        sendMessage(formData.message);
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

export default Dialogs;
