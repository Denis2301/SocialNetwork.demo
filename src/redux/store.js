import profileReducer from "./profileReducer";
import messageReducer from "./messageReducer";
import sidebarReducer from "./sidebarReducer";

export const store = {
    _state: {
        profilePage: {
            posts: [
                {
                    url: "https://w7.pngwing.com/pngs/851/967/png-transparent-cat-computer-icons-creative-cat-mammal-cat-like-mammal-animals-thumbnail.png",
                    message:
                        "Hi, how are you? Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat soluta quod voluptas, quibusdam rerum perferendis aliquam! Ad praesentium commodi autem, quod laudantium possimus repudiandae ipsa maxime labore illo explicabo quisquam quas accusantium tempora, modi eaque dignissimos, ea inventore! Voluptate dolorem odio, eaque ad nemo accusantium, harum perspiciatis hic animi voluptatum quasi officiis maiores nihil autem? Totam beatae quaerat sit esse perspiciatis aspernatur nostrum obcaecati magnam atque dolor. Impedit ratione veritatis hic corrupti natus autem, ipsam harum totam voluptate dolore voluptatum ducimus corporis. Doloribus fugiat ipsa, consequuntur reiciendis omnis eligendi laudantium quas sequi tempora error quis veniam, est iure eum nam!Maxime nisi, in iste minus atque quae vel ut recusandae esse saepe magnam. Excepturi iste nihil labore officia explicabo, voluptatem cumque, ducimus quas amet non aperiam dolor voluptatum aspernatur. Obcaecati veritatis dolores architecto. Eveniet voluptatum vero consequatur sit rem beatae vel officia.",
                    likeCount: 15,
                    author: "Dmitry",
                    id: 1,
                },
                {
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYZ9Ok8xjEoczfzG7nxSHRW7SVJDLJimU8Vd0lNC-oSH_0fTGVCfpfHwQFMMgPVSGVc4k&usqp=CAU",
                    message: "Its my first post",
                    likeCount: 20,
                    author: "Sasha",
                    id: 2,
                },
            ],
            newTextPost: "It-Kamasutra.com",
        },
        sidebar: {
            friends: [
                {
                    id: 1,
                    name: "Dmitry",
                    url: "https://w7.pngwing.com/pngs/851/967/png-transparent-cat-computer-icons-creative-cat-mammal-cat-like-mammal-animals-thumbnail.png",
                },
                {
                    id: 2,
                    name: "Sasha",
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYZ9Ok8xjEoczfzG7nxSHRW7SVJDLJimU8Vd0lNC-oSH_0fTGVCfpfHwQFMMgPVSGVc4k&usqp=CAU",
                },
                {
                    id: 3,
                    name: "Andrew",
                    url: "https://w7.pngwing.com/pngs/851/967/png-transparent-cat-computer-icons-creative-cat-mammal-cat-like-mammal-animals-thumbnail.png",
                },
            ],
        },
        messagesPage: {
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
            newTextBody: "",
        },
    },
    _callSubscriber() {
        console.log("render _state");
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this.profilePage = profileReducer(action, this._state.profilePage);
        this.messagesPage = messageReducer(action, this._state.messagesPage);
        this.sidebar = sidebarReducer(action, this._state.sidebar);
        this._callSubscriber(this);
    },
};



window._state = store._state;
