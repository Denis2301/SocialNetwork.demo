const SEND_MESSAGE = "SEND_MESSAGE";
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
    ],
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
    ],
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
    ],
};
const messageReducer = (state = initialState, action) => {
    let newDialogUser = {
        id: state.dialogs.length,
        name: "New Author",
        url: "https://w7.pngwing.com/pngs/851/967/png-transparent-cat-computer-icons-creative-cat-mammal-cat-like-mammal-animals-thumbnail.png",
        data: {
            year: new Date().getFullYear(),
            month: new Date().getMonth(),
            date: new Date().getDate(),
        },
    };
    switch (action.type) {
        case SEND_MESSAGE:
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
export const sendMessage = (message) => ({ type: SEND_MESSAGE, message});
export default messageReducer;
