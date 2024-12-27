import { combineReducers, createStore } from "redux";
import profileReducer from "./profileReducer";
import messageReducer from "./messageReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";

const reducers = combineReducers({
    profilePage: profileReducer,
    sidebar: sidebarReducer,
    messagesPage: messageReducer,
    usersPage: usersReducer,
});

const store = createStore(reducers);
window.store = store;
export default store;


