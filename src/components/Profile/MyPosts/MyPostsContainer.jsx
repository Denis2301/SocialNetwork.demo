import React from "react";
import {
    addPostCreator,
    updateNewPostTextCreator,
} from "../../../redux/profileReducer";
import { MyPosts } from "./MyPosts";
import { connect } from "react-redux";

const mapStateToMyPostsProps = (state) => {
    return {
        profilePage: state.profilePage.posts,
        newTextPost: state.profilePage.newTextPost,
    };
};
const mapDispatchToMyPostsProps = (dispatch) => {
    return {
        updateNewPostText: (newText) => {
            const action = updateNewPostTextCreator(
                "UPDATE_NEW_POST_TEXT",
                newText
            );
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostCreator("ADD_POST"));
        },
    };
};
export const MyPostsContainer = connect (
    mapStateToMyPostsProps,
    mapDispatchToMyPostsProps
)(MyPosts);
