import React from "react";
import objStyle from "./Post.module.css";

export const Post = () => {
    return (
        <div className={`${objStyle.post}`}>
            <div className={objStyle.post__imgProfile}>
                <img
                    src="https://w7.pngwing.com/pngs/851/967/png-transparent-cat-computer-icons-creative-cat-mammal-cat-like-mammal-animals-thumbnail.png"
                    alt="avatar"
                />
            </div>
            <p className={objStyle.post__text}>It is our new program! Hey!</p>
            <span id={objStyle.like}>like</span>
        </div>
    );
};
