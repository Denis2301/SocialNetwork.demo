import { AppDispatch, AppStateType } from "@/redux/redux-store";
import { Alert, Avatar, Button, Drawer, Input, List } from "antd";
import { FC, UIEvent, useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	ChatMessageType,
    sendMessage,
    startMessagesListening,
    stopMessagesListening,
} from "../../redux/chatReducer";
import React from "react";

const Message: FC<{
    message: ChatMessageType;
    index: number;
}> = React.memo(({ message, index }) => {
    console.log("<<<<Message");
    return (
        <List.Item>
            <List.Item.Meta
                key={message.id}
                avatar={<Avatar src={`${message.photo}`} />}
                title={<a href="https://ant.design">{message.userName}</a>}
                description={message.message}
            />
        </List.Item>
    );
});

const Messages: FC<{}> = ({}) => {
    const messageAnchorRef = useRef<HTMLDivElement | null>(null);
    const [isAutoScroll, setIsAutoScroll] = useState(true);
    const messages = useSelector((state: AppStateType) => state.chat.messages);
    useEffect(() => {
        if (isAutoScroll) {
            messageAnchorRef.current?.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages]);
    const scrollHandler = (e: UIEvent<HTMLDivElement>) => {
        let element = e.currentTarget;
        if (element.scrollHeight - element.scrollTop <= element.clientHeight) {
            !isAutoScroll && setIsAutoScroll(true);
        } else {
            isAutoScroll && setIsAutoScroll(false);
        }
    };
    return (
        <>
            <div
                onScroll={scrollHandler}
                style={{ overflowY: "auto", height: "300px" }}
            >
                <List
                    itemLayout="horizontal"
                    dataSource={messages}
                    renderItem={(item, index) => (
                        <Message message={item} index={index} />
                    )}
                />
                <div ref={messageAnchorRef}></div>
            </div>
        </>
    );
};
const AddMessageForm: FC<{}> = ({}) => {
    const [message, setMessage] = useState("");
    const dispatch = useDispatch<AppDispatch>();
    const status = useSelector(
        (state: AppStateType) => state.chat.chanelStatus
    );
    const sendMessageHandler = () => {
        if (message.trim() !== "") {
            dispatch(sendMessage(message));
            setMessage("");
        } else {
            return;
        }
    };
    const keyDownHandler = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key == "Enter" && !e.shiftKey) {
            e.preventDefault();
            status === "ready" && sendMessageHandler();
        }
    };
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <Input.TextArea
                onKeyDown={keyDownHandler}
                value={message}
                style={{ marginBottom: "5px" }}
                onChange={(e) => setMessage(e.target.value)}
            ></Input.TextArea>
            <Button
                disabled={status !== "ready"}
                type={"primary"}
                style={{ alignSelf: "flex-end" }}
                onClick={sendMessageHandler}
            >
                SEND
            </Button>
        </div>
    );
};
const Chat: FC<{}> = ({}) => {
    const dispatch = useDispatch<AppDispatch>();
    const status = useSelector(
        (state: AppStateType) => state.chat.chanelStatus
    );
    useEffect(() => {
        dispatch(startMessagesListening());
        return () => {
            dispatch(stopMessagesListening());
        };
    }, []);

    return (
        <div
            style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
            }}
        >
            {status !== "ready" && (
                <Alert
                    message="Warning"
                    description="Соединение потеряно. Переподключение..."
                    type="warning"
                    showIcon
                    closable
                    style={{ marginBottom: "10px" }}
                />
            )}
            <>
                <Messages />
                <AddMessageForm />
            </>
        </div>
    );
};

const ChatPage: FC<{
    setIsChatOpen: (isChatOpen: boolean) => void;
    isChatOpen: boolean;
}> = ({ setIsChatOpen, isChatOpen }) => {
    return (
        <>
            <Drawer
                title="Basic Drawer"
                onClose={() => {
                    setIsChatOpen(false);
                }}
                open={isChatOpen}
            >
                <Chat />
            </Drawer>
        </>
    );
};
export default ChatPage;
