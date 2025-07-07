import { v1 } from "uuid";
import { Dispatch } from "redux";
import { ChatMessageAPIType, StatusType, chatAPI } from "./../api/chat-api";
import { CommonThunkType, InferActionsTypes } from "./redux-store";

export type ChatMessageType = ChatMessageAPIType & { id: string };
export type InitialStateType = {
    messages: Array<ChatMessageType>;
    chanelStatus: StatusType;
};
const initialState: InitialStateType = {
    messages: [],
    chanelStatus: "pending",
};

export const actions = {
    messagesReceived: (messages: Array<ChatMessageAPIType>) =>
        ({
            type: "CHAT/MESSAGES_RECEIVED",
            payload: { messages },
        } as const),
    statusChanged: (chanelStatus: StatusType) =>
        ({
            type: "CHAT/STATUS_CHANGED",
            payload: { chanelStatus },
        } as const),
};
type ActionsTypes = InferActionsTypes<typeof actions>;
const chatReducer = (
    state = initialState,
    action: ActionsTypes
): InitialStateType => {
    switch (action.type) {
        case "CHAT/MESSAGES_RECEIVED":
            return {
                ...state,
                messages: [
                    ...state.messages,
                    ...action.payload.messages.map((m) => ({
                        ...m,
                        id: v1(),
                    })),
                ].slice(-100),
            };
        case "CHAT/STATUS_CHANGED":
            return {
                ...state,
                chanelStatus: action.payload.chanelStatus,
            };
        default:
            return { ...state };
    }
};
let _newMessageHandler: ((messages: Array<ChatMessageAPIType>) => void) | null;

const newMessageHandlerCreator = (dispatch: Dispatch) => {
    if (!_newMessageHandler) {
        _newMessageHandler = (messages) => {
            dispatch(actions.messagesReceived(messages));
        };
    }
    return _newMessageHandler;
};
let _statusChangedHandler: ((status: StatusType) => void) | null;

const newStatusHandlerCreator = (dispatch: Dispatch) => {
    if (!_statusChangedHandler) {
        _statusChangedHandler = (chanelStatus) => {
            dispatch(actions.statusChanged(chanelStatus));
        };
    }
    return _statusChangedHandler;
};

export const startMessagesListening = (): ThunkType => async (dispatch) => {
    chatAPI.start();
    chatAPI.subscribe("messages-received", newMessageHandlerCreator(dispatch));
    chatAPI.subscribe("status-changed", newStatusHandlerCreator(dispatch));
};
export const stopMessagesListening = (): ThunkType => async (dispatch) => {
    chatAPI.unSubscribe(
        "messages-received",
        newMessageHandlerCreator(dispatch)
    );
    chatAPI.stop();
};
export const sendMessage =
    (message: string): ThunkType =>
    async (dispatch) => {
        chatAPI.sendMessage(message);
    };

export default chatReducer;
type ThunkType = CommonThunkType<ActionsTypes>;
