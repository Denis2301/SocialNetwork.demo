let rerenderEntireThree;
export const state = {
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
        newTextMessage: "It-Kamasutra.com",
    },
};
window.state = state;
export const addPost = () => {
    const dataNewPost = {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYZ9Ok8xjEoczfzG7nxSHRW7SVJDLJimU8Vd0lNC-oSH_0fTGVCfpfHwQFMMgPVSGVc4k&usqp=CAU",
        message: state.profilePage.newTextPost,
        likeCount: 0,
        author: "New Author",
        id: state.profilePage.posts.length,
    };
    state.profilePage.posts.push(dataNewPost);
    state.profilePage.newTextPost = "";
    rerenderEntireThree(
        state,
        updateNewTextMessage,
        updateNewPostText,
        sendTextMessage,
        addPost
    );
};
export const updateNewPostText = (newText) => {
    state.profilePage.newTextPost = newText;
    rerenderEntireThree(
        state,
        updateNewTextMessage,
        updateNewPostText,
        sendTextMessage,
        addPost
    );
};
export const subscribe = (observer) => {
    rerenderEntireThree = observer;
};
export const sendTextMessage = () => {
    state.messagesPage.dialogs.push({
        id: state.messagesPage.dialogs.length,
        name: "New Author",
        url: "https://w7.pngwing.com/pngs/851/967/png-transparent-cat-computer-icons-creative-cat-mammal-cat-like-mammal-animals-thumbnail.png",
        data: {
            year: new Date().getFullYear(),
            month: new Date().getMonth(),
            date: new Date().getDate(),
        },
    });
    state.messagesPage.messageAsk.push({
        author: "New Author",
        text: state.messagesPage.newTextMessage,
        id: state.messagesPage.messageAsk.length,
        url: "https://w7.pngwing.com/pngs/851/967/png-transparent-cat-computer-icons-creative-cat-mammal-cat-like-mammal-animals-thumbnail.png",
        data: {
            year: new Date().getFullYear(),
            month: new Date().getMonth(),
            date: new Date().getDate(),
        },
    });
    state.messagesPage.newTextMessage = "";
    rerenderEntireThree(
        state,
        updateNewTextMessage,
        updateNewPostText,
        sendTextMessage,
        addPost
    );
};
export const updateNewTextMessage = (newText) => {
    state.messagesPage.newTextMessage = newText;
    rerenderEntireThree(
        state,
        updateNewTextMessage,
        updateNewPostText,
        sendTextMessage,
        addPost
    );
};
