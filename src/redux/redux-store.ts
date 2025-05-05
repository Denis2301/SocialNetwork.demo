import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import profileReducer from "./profileReducer";
import messageReducer from "./messageReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import { thunk as thunkMiddleware } from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import appReducer from "./appReducer";

const RootReducer = combineReducers({
    profilePage: profileReducer,
    sidebar: sidebarReducer,
    messagesPage: messageReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
});
export type AppStateType = ReturnType<typeof RootReducer>;

export type InferActionsTypes<T extends { [key: string]: (...args: any) => object }> =
    ReturnType<T[keyof T]>;

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    RootReducer,
    composeEnhancers(applyMiddleware(thunkMiddleware))
);
//@ts-ignore
window.__store__ = store;
export default store;
