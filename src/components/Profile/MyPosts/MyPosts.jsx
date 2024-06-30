import React from "react";
import objStyle from "./MyPosts.module.css";
import { Post } from "./Post/Post";

export const MyPosts = (props) => {
    const postsElements = props.posts.map((p) => {
        return (
            <Post
                message={p.message}
                likeCount={p.likeCount}
                author={p.author}
                id={p.id}
            />
        );
    });
    return (
        <section className={objStyle.myPost}>
            <div
                className={objStyle.new__post}
                aria-labelledby={objStyle.new__post__title}
            >
                <h3
                    id={objStyle.new__post__title}
                    className={objStyle.new__post__title}
                >
                    My posts
                </h3>
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
            <div className={objStyle.posts}>{postsElements}</div>
        </section>
    );
};
