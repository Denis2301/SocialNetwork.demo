import React from "react";
import {
    addPostCreator,
    updateNewPostTextCreator,
} from "../../../redux/profileReducer";
import { MyPosts } from "./MyPosts";
import StoreContext from "../../../StoreContext";
export const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                const state = store.getState();
                const onPostChange = (newText) => {
                    const action = updateNewPostTextCreator(
                        "UPDATE_NEW_POST_TEXT",
                        newText
                    );
                    store.dispatch(action);
                };
                const addPost = () => {
                    store.dispatch(addPostCreator("ADD_POST"));
                };
                return (
                    <MyPosts
                        profilePage={state.profilePage.posts}
                        updateNewPostText={onPostChange}
                        addPost={addPost}
                        newTextPost={state.profilePage.newTextPost}
                    />
                );
            }}
        </StoreContext.Consumer>
    );
};
