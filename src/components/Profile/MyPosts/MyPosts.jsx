import React, { useRef } from "react";
import objStyle from "./MyPosts.module.css";
import { Post } from "./Post/Post";
import { useState, createRef } from "react";

export const MyPosts = ({
    updateNewPostText,
    addPost,
    profilePage,
    newTextPost,
}) => {
    let textPost = useRef();
    const onPostChange = () => {
        let newText = textPost.current.value;
        updateNewPostText(newText);
    };
    const onAddPost = () => {
        addPost();
    };
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
                <form action="">
                    <textarea
                        placeholder="Enter Your Message"
                        value={newTextPost}
                        className={objStyle.new__post__text}
                        ref={textPost}
                        onChange={onPostChange}
                        rows="5"
                    />
                    <button
                        className={objStyle.new__post__send}
                        onClick={(e) => {
                            e.preventDefault();
                            onAddPost();
                        }}
                    >
                        Add Post.
                    </button>
                </form>
            </div>
            <div className={objStyle.posts}>
                {profilePage.map((p) => {
                    return (
                        <Post
                            url={p.url}
                            message={p.message}
                            likeCount={p.likeCount}
                            author={p.author}
                            id={p.id}
                        />
                    );
                })}
            </div>
        </section>
    );
};
