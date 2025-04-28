import objStyle from "./Dialogs.module.css";
import { maxLengthCreator, required } from "../../utils/validators";
import { Contact } from "./ContactItem/Contact";
import { MessageAsk } from "./MessagesAsk/MessagesAsk";
import { MessageAnswer } from "./MassageAnswer/MessageAnswer";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../common/FormsControls/FormsControls";

const maxLength50 = maxLengthCreator(50);
let AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                validate={[required, maxLength50]}
                component={Textarea}
                placeholder="Enter Your Message"
                name="messageDialog"
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
AddMessageForm = reduxForm({ form: "dialogMessageForm" })(AddMessageForm);
const Dialogs = ({ sendMessage, messagesPage, messageAsk, messageAnswer }) => {
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
    const onSubmit = async (formData) => {
        await sendMessage(formData.messageDialog);
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
                <AddMessageForm onSubmit={onSubmit} />
            </div>
        </main>
    );
};

export default Dialogs;
