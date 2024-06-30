import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import * as serviceWorker from './serviceWorker';
const dialogs = [
    { id: 1, name: "Dmitry" },
    { id: 2, name: "Sasha" },
    { id: 3, name: "Andrew" },
];
const messages = [
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
        url: "https://w7.pngwing.com/pngs/851/967/png-transparent-cat-computer-icons-creative-cat-mammal-cat-like-mammal-animals-thumbnail.png",
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
];
const posts = [
    {
        message:
            "Hi, how are you? Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat soluta quod voluptas, quibusdam rerum perferendis aliquam! Ad praesentium commodi autem, quod laudantium possimus repudiandae ipsa maxime labore illo explicabo quisquam quas accusantium tempora, modi eaque dignissimos, ea inventore! Voluptate dolorem odio, eaque ad nemo accusantium, harum perspiciatis hic animi voluptatum quasi officiis maiores nihil autem? Totam beatae quaerat sit esse perspiciatis aspernatur nostrum obcaecati magnam atque dolor. Impedit ratione veritatis hic corrupti natus autem, ipsam harum totam voluptate dolore voluptatum ducimus corporis. Doloribus fugiat ipsa, consequuntur reiciendis omnis eligendi laudantium quas sequi tempora error quis veniam, est iure eum nam!Maxime nisi, in iste minus atque quae vel ut recusandae esse saepe magnam. Excepturi iste nihil labore officia explicabo, voluptatem cumque, ducimus quas amet non aperiam dolor voluptatum aspernatur. Obcaecati veritatis dolores architecto. Eveniet voluptatum vero consequatur sit rem beatae vel officia.",
        likeCount: 15,
        author: "Dmitry",
        id: 1,
    },
    {
        message: "Its my first post",
        likeCount: 20,
        author: "Sasha",
        id: 2,
    },
    {
        message: "BlaBla",
        likeCount: 4,
        author: "Sasha",
        id: 3,
    },
    {
        message: "DaDa",
        likeCount: 40,
        author: "Sasha",
        id: 4,
    },
];
ReactDOM.render(
    <App dialogs={dialogs} messages={messages} posts={posts}/>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// serviceWorker.unregister();
