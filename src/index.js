import reportWebVitals from "./reportWebVitals";
// import * as serviceWorker from './serviceWorker';
import store from "./redux/redux-store";
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
React.createElement("h1", [React.createElement(App)])
const root = ReactDOM.createRoot(document.getElementById("root"));
// setInterval(() => {
//     store.dispatch({ type: "FAKE" });
// }, 1000);
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// serviceWorker.unregister();
