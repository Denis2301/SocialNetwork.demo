import objStyle from "./MessagesAsk.module.css";
export const Message = (props) => {
    return (
        <div className={objStyle.contact__messages_item}>
            <div className={objStyle.messages_itemImg}>
                <img src={props.url} alt="avatar" />
                <span id={objStyle.messages_item__author}>{props.author}</span>
                <span className={objStyle.data}>
                    {props.data.year}.{props.data.month}.{props.data.date}
                </span>
            </div>
            <div className={objStyle.massages_itemText}>
                <p>{props.text}</p>
            </div>
        </div>
    );
};
