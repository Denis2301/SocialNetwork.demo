import React from "react";
import objStyle from "./MyPosts.module.css";
import { Post } from "./Post/Post";

export const MyPosts = () => {
    return (
        <div className={objStyle.myPost}>
            <div className={objStyle.new__post}>
                <h2 className={objStyle.new__post__title}>My posts</h2>
                <textarea
                    className={objStyle.new__post__text}
                    name=""
                    id=""
                    rows="5"
                >
                    Your text
                </textarea>
                <button className={objStyle.new__post__send}>Add Post.</button>
            </div>
            <div className={objStyle.posts}>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    );
};
