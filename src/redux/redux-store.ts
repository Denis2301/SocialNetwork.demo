import {
	Action,
	applyMiddleware,
	combineReducers,
	compose,
	createStore
} from "redux";
import { reducer as formReducer } from "redux-form";
import { ThunkAction, ThunkDispatch, thunk as thunkMiddleware } from "redux-thunk";
import appReducer from "./appReducer";
import authReducer from "./authReducer";
import messageReducer from "./messageReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import chatReducer from "./chatReducer";

const RootReducer = combineReducers({
    profilePage: profileReducer,
    sidebar: sidebarReducer,
    messagesPage: messageReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
	chat: chatReducer
});
export type AppStateType = ReturnType<typeof RootReducer>;

export type InferActionsTypes<
    T extends { [key: string]: (...args: any) => object }
> = ReturnType<T[keyof T]>;


export type CommonThunkType<
    AT extends Action = Action
> = ThunkAction<Promise<any>, AppStateType, unknown, AT>;

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    RootReducer,
    composeEnhancers(applyMiddleware(thunkMiddleware))
);
export type AppDispatch = ThunkDispatch<AppStateType, unknown, Action>;
//@ts-ignore
window.__store__ = store;
export default store;
