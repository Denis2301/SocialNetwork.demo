import React, { FC, useState } from "react";
import objStyle from "./Post.module.css";

type PostPropsType = {
    url: string,
    author: string,
    message: string,
    likeCount: number,
};
export const Post: FC<PostPropsType> = ({
    url,
    author,
    message,
    likeCount,
}) => {
    return (
        <div className={`${objStyle.post}`}>
            <div className={objStyle.post__imgProfile}>
                <img src={url} alt="avatar" />
                <span className={objStyle.author}>{author}</span>
            </div>
            <p className={objStyle.post__text}>{message}</p>
            <span id={objStyle.likeCount}>{likeCount}</span>
            <span id={objStyle.like}>like</span>
        </div>
    );
};
