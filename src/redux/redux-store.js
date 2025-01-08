import { combineReducers, createStore } from "redux";
import profileReducer from "./profileReducer";
import messageReducer from "./messageReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";

const reducers = combineReducers({
    profilePage: profileReducer,
    sidebar: sidebarReducer,
    messagesPage: messageReducer,
    usersPage: usersReducer,
	auth: authReducer
});

const store = createStore(reducers);
window.store = store;
export default store;


