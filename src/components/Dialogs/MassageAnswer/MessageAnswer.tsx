import { FC } from "react";
import objStyle from "./MessageAnswer.module.css";
import { DateType } from "@/types/types";

type MessageAnswerType = {
    key: number;
    author: string;
    text: string;
    url: string;
    data: DateType;
};
export const MessageAnswer: FC<MessageAnswerType> = ({
    key,
    author,
    text,
    url,
    data,
}) => {
    return (
        <div key={key} className={objStyle.contact__messages_item}>
            <div className={objStyle.messages_itemImg}>
                <img src={url} alt="avatar" />
                <span id={objStyle.messages_item__author}>{author}</span>
                <span className={objStyle.data}>
                    {data.year}.{data.month}.{data.date}
                </span>
            </div>
            <div className={objStyle.massages_itemText}>
                <p>{text}</p>
            </div>
        </div>
    );
};
