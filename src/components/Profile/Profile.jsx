import React from "react";
import objStyle from "./Profile.module.css";
import { MyPosts } from "./MyPosts/MyPosts";
export const Profile = () => {
    return (
        <main className={objStyle.content}>
            <img
                src="https://oir.mobi/uploads/posts/2021-03/1616964894_10-p-fon-priroda-12.jpg"
                className={objStyle.content__background}
                alt="background-profile"
            />
            <div className={objStyle.describe__profile}>
                <div className={objStyle.describe__profile__image}>
                    <img
                        src="https://w7.pngwing.com/pngs/851/967/png-transparent-cat-computer-icons-creative-cat-mammal-cat-like-mammal-animals-thumbnail.png"
                        alt="profile__image"
                    />
                </div>
                <div className={objStyle.describe__profile__inform}>
                    <h2>Denis</h2>
                    <p>Date of Birth: 23 January</p>
                    <p>City: Koryukivka</p>
                    <p>Education: USU '1</p>
                </div>
            </div>
            <MyPosts />
        </main>
    );
};
