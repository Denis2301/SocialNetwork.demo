let subscribers = {
    "messages-received": [] as Array<MessagesReceivedSubscriberType>,
    "status-changed": [] as Array<StatusChangedSubscriberType>,
};
let ws: WebSocket | null = null;
type EventsNamesType = "messages-received" | "status-changed";
const notifySubscribersAboutStatus = (status: StatusType) => {
    subscribers["status-changed"].forEach((s) => {
        s(status);
    });
};
const closeHandler = () => {
    notifySubscribersAboutStatus("pending");
    setTimeout(createChanel, 3000);
};
const messageHandler = (e: MessageEvent) => {
    const newMessages = JSON.parse(e.data);
    subscribers["messages-received"].forEach((s) => {
        s(newMessages);
    });
};
const openHandler = () => {
    notifySubscribersAboutStatus("ready");
};
const errorHandler = () => {
    notifySubscribersAboutStatus("error");
    console.error("REFRESH PAGE");
};
const cleanUp = () => {
    ws?.removeEventListener("open", openHandler);
    ws?.removeEventListener("message", messageHandler);
    ws?.removeEventListener("close", closeHandler);
    ws?.removeEventListener("error", errorHandler);
    notifySubscribersAboutStatus("pending");
};
function createChanel() {
    ws = new WebSocket(
        "wss://social-network.samuraijs.com/handlers/ChatHandler.ashx"
    );
    ws.addEventListener("open", openHandler);
    ws.addEventListener("message", messageHandler);
    ws.addEventListener("close", closeHandler);
    ws.addEventListener("error", errorHandler);
    notifySubscribersAboutStatus("ready");
}

export const chatAPI = {
    start() {
        cleanUp();
        createChanel();
    },
    stop() {
        cleanUp();
        subscribers["messages-received"] = [];
        subscribers["status-changed"] = [];
        ws?.close();
    },
    subscribe(
        newStatus: EventsNamesType,
        callback: MessagesReceivedSubscriberType | StatusChangedSubscriberType
    ) {
        //@ts-ignore
        subscribers[newStatus].push(callback);
        return () => {
            //@ts-ignore
            subscribers[newStatus] = subscribers[newStatus].filter(
                (s) => s !== callback
            );
        };
    },
    unSubscribe(
        newStatus: EventsNamesType,
        callback: MessagesReceivedSubscriberType | StatusChangedSubscriberType
    ) {
        //@ts-ignore
        subscribers[newStatus] = subscribers[newStatus].filter(
            (s) => s !== callback
        );
    },

    sendMessage(message: string) {
        ws?.send(message);
    },
};
export type StatusType = "pending" | "ready" | "error";
type MessagesReceivedSubscriberType = (
    messages: Array<ChatMessageAPIType>
) => void;
type StatusChangedSubscriberType = (status: StatusType) => void;

export type ChatMessageAPIType = {
    userName: string;
    message: string;
    photo: string;
};
