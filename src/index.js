import reportWebVitals from "./reportWebVitals";
// import * as serviceWorker from './serviceWorker';
import {
    updateNewPostText,
    sendTextMessage,
    state,
    addPost,
    subscribe,
} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { updateNewTextMessage } from "./redux/state";
const root = ReactDOM.createRoot(document.getElementById("root"));
const rerenderEntireThree = (state, updateNewTextMessage, updateNewPostText, sendTextMessage, addPost) => {
    root.render(
        <BrowserRouter>
            <App
                state={state}
                updateNewTextMessage={updateNewTextMessage}
                updateNewPostText={updateNewPostText}
                sendTextMessage={sendTextMessage}
                addPost={addPost}
            />
        </BrowserRouter>
    );
};
rerenderEntireThree(
    state,
    updateNewTextMessage,
    updateNewPostText,
    sendTextMessage,
    addPost
);
subscribe(rerenderEntireThree);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// serviceWorker.unregister();
