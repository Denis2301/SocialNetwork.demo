const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
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
    _addPosts() {
        const dataNewPost = {
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYZ9Ok8xjEoczfzG7nxSHRW7SVJDLJimU8Vd0lNC-oSH_0fTGVCfpfHwQFMMgPVSGVc4k&usqp=CAU",
            message: this._state.profilePage.newTextPost,
            likeCount: 0,
            author: "New Author",
            id: this._state.profilePage.posts.length,
        };
        this._state.profilePage.posts.push(dataNewPost);
        this._state.profilePage.newTextPost = "";
        this._callSubscriber(this);
    },
    _updateNewTextPost(newText) {
        this._state.profilePage.newTextPost = newText;
        this._callSubscriber(this);
    },
    _addMessage() {
        const messagesBody = this._state.messagesPage.newTextBody;
        this._state.messagesPage.dialogs.push({
            id: this._state.messagesPage.dialogs.length,
            name: "New Author",
            url: "https://w7.pngwing.com/pngs/851/967/png-transparent-cat-computer-icons-creative-cat-mammal-cat-like-mammal-animals-thumbnail.png",
            data: {
                year: new Date().getFullYear(),
                month: new Date().getMonth(),
                date: new Date().getDate(),
            },
        });
        this._state.messagesPage.messageAsk.push({
            author: "New Author",
            text: messagesBody,
            id: this._state.messagesPage.messageAsk.length,
            url: "https://w7.pngwing.com/pngs/851/967/png-transparent-cat-computer-icons-creative-cat-mammal-cat-like-mammal-animals-thumbnail.png",
            data: {
                year: new Date().getFullYear(),
                month: new Date().getMonth(),
                date: new Date().getDate(),
            },
        });
        this._state.messagesPage.newTextBody = "";
        this._callSubscriber(this);
    },
    _updateNewTextMessage(newText) {
        this._state.messagesPage.newTextBody = newText;
        this._callSubscriber(this);
    },
    dispatch(action) {
        switch (action.type) {
            case ADD_POST:
                this._addPosts();
                break;
            case UPDATE_NEW_POST_TEXT:
                this._updateNewTextPost(action.newText);
                break;
            case SEND_MESSAGE:
                this._addMessage();
                break;
            case UPDATE_NEW_MESSAGE_BODY:
                this._updateNewTextMessage(action.body);
                break;
            default:
                break;
        }
    },
};

// export const actionCreator = (type, value) => ({ type: type, newText: value });
export const addPostCreator = (type) => ({ type: type });
export const updateNewPostTextCreator = (type, text) => ({
    type: type,
    newText: text,
});
export const sendMessageCreator = (type) => ({ type: type });
export const updateNewMessageBodyCreator = (type, text) => ({
    type: type,
    body: text,
});
window._state = store._state;
