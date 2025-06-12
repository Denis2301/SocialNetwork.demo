import { InferActionsTypes } from "./redux-store";

export type DialogsType = {
    id: number;
    name: string;
    url: string;
    data: { year: number; month: number; date: number };
};
export type MessageType = {
    author: string;
    text: string;
    id: number;
    url: string;
    data: { year: number; month: number; date: number };
};

const initialState = {
    dialogs: [
        {
            id: 1,
            name: "Dmitry",
            url: "https://w7.pngwing.com/pngs/851/967/png-transparent-cat-computer-icons-creative-cat-mammal-cat-like-mammal-animals-thumbnail.png",
            data: {
                year: new Date().getFullYear(),
                month: new Date().getMonth(),
                date: new Date().getDate(),
            },
        },
        {
            id: 2,
            name: "Sasha",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYZ9Ok8xjEoczfzG7nxSHRW7SVJDLJimU8Vd0lNC-oSH_0fTGVCfpfHwQFMMgPVSGVc4k&usqp=CAU",
            data: {
                year: new Date().getFullYear(),
                month: new Date().getMonth(),
                date: new Date().getDate(),
            },
        },
        {
            id: 3,
            name: "Andrew",
            url: "https://w7.pngwing.com/pngs/851/967/png-transparent-cat-computer-icons-creative-cat-mammal-cat-like-mammal-animals-thumbnail.png",
            data: {
                year: new Date().getFullYear(),
                month: new Date().getMonth(),
                date: new Date().getDate(),
            },
        },
    ] as Array<DialogsType>,
    messageAsk: [
        {
            author: "Dmitry",
            text: "I am a normal popove Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quod distinc distinctio vel, voluptatum ducimus libero.",
            id: 1,
            url: "https://w7.pngwing.com/pngs/851/967/png-transparent-cat-computer-icons-creative-cat-mammal-cat-like-mammal-animals-thumbnail.png",
            data: {
                year: new Date().getFullYear(),
                month: new Date().getMonth(),
                date: new Date().getDate(),
            },
        },
        {
            author: "Sasha",
            text: "I am a normal popove Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quod distinc distinctio vel, voluptatum ducimus libero.",
            id: 2,
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYZ9Ok8xjEoczfzG7nxSHRW7SVJDLJimU8Vd0lNC-oSH_0fTGVCfpfHwQFMMgPVSGVc4k&usqp=CAU",
            data: {
                year: new Date().getFullYear(),
                month: new Date().getMonth(),
                date: new Date().getDate(),
            },
        },
        {
            author: "Andrew",
            text: "I am a normal popove Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quod distinc distinctio vel, voluptatum ducimus libero.",
            id: 3,
            url: "https://w7.pngwing.com/pngs/851/967/png-transparent-cat-computer-icons-creative-cat-mammal-cat-like-mammal-animals-thumbnail.png",
            data: {
                year: new Date().getFullYear(),
                month: new Date().getMonth(),
                date: new Date().getDate(),
            },
        },
    ] as Array<MessageType>,
    messageAnswer: [
        {
            author: "Dmitry",
            text: "I am a normal popove Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quod distinc distinctio vel, voluptatum ducimus libero.",
            id: 1,
            url: "https://w7.pngwing.com/pngs/851/967/png-transparent-cat-computer-icons-creative-cat-mammal-cat-like-mammal-animals-thumbnail.png",
            data: {
                year: new Date().getFullYear(),
                month: new Date().getMonth(),
                date: new Date().getDate(),
            },
        },
        {
            author: "Sasha",
            text: "I am a normal popove Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quod distinc distinctio vel, voluptatum ducimus libero.",
            id: 2,
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYZ9Ok8xjEoczfzG7nxSHRW7SVJDLJimU8Vd0lNC-oSH_0fTGVCfpfHwQFMMgPVSGVc4k&usqp=CAU",
            data: {
                year: new Date().getFullYear(),
                month: new Date().getMonth(),
                date: new Date().getDate(),
            },
        },
        {
            author: "Andrew",
            text: "I am a normal popove Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quod distinc distinctio vel, voluptatum ducimus libero.",
            id: 3,
            url: "https://w7.pngwing.com/pngs/851/967/png-transparent-cat-computer-icons-creative-cat-mammal-cat-like-mammal-animals-thumbnail.png",
            data: {
                year: new Date().getFullYear(),
                month: new Date().getMonth(),
                date: new Date().getDate(),
            },
        },
    ] as Array<MessageType>,
};
export type InitialStateType = typeof initialState;
export const actions = {
    sendMessage: (message: string) =>
        ({
            type: "MESSAGES/SEND_MESSAGE",
            message,
        } as const),
};

const messageReducer = (
    state = initialState,
    action: ActionsTypes
): InitialStateType => {
    switch (action.type) {
        case "MESSAGES/SEND_MESSAGE":
            return {
                ...state,
                messageAsk: [
                    ...state.messageAsk,
                    {
                        author: "New Author",
                        text: action.message,
                        id: state.messageAsk.length,
                        url: "https://w7.pngwing.com/pngs/851/967/png-transparent-cat-computer-icons-creative-cat-mammal-cat-like-mammal-animals-thumbnail.png",
                        data: {
                            year: new Date().getFullYear(),
                            month: new Date().getMonth(),
                            date: new Date().getDate(),
                        },
                    },
                ],
            };
        default:
            return { ...state };
    }
};

export default messageReducer;
type ActionsTypes = InferActionsTypes<typeof actions>;