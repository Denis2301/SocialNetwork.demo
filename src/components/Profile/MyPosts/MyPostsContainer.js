import React from "react";
import { addPost, updateNewPostText } from "../../../redux/profileReducer";
import { MyPosts } from "./MyPosts";
import { connect } from "react-redux";

const mapStateToMyPostsProps = (state) => {
    return {
        profilePage: state.profilePage.posts,
        newTextPost: state.profilePage.newTextPost,
    };
};

export const MyPostsContainer = connect(mapStateToMyPostsProps, {
    updateNewPostText,
    addPost,
})(MyPosts);
