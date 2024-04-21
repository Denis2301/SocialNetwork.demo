import React from "react";
import objStyle from "./MyPosts.module.css";
import { Post } from "./Post/Post";

export const MyPosts = (props) => {
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
                <Post message={"Hi, how are you?"} likeCount={15} />
                <Post message={"Its my first post"} likeCount={20} />
            </div>
        </div>
    );
};
