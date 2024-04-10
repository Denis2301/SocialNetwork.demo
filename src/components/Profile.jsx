import React from "react";
import objStyle from "./Profile.module.css";
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
                    <button className={objStyle.new__post__send}>Send</button>
                </div>
                <div className={objStyle.posts}>
                    <div className={`${objStyle.post} ${objStyle.two}`}>
                        <div className={objStyle.post__imgProfile}></div>
                        <p className={objStyle.post__text}>
                            Hey, why nobody love me?
                        </p>
                    </div>
                    <div className={`${objStyle.post} ${objStyle.two}`}>
                        <div className={objStyle.post__imgProfile}></div>
                        <p className={objStyle.post__text}>
                            It is our new program! Hey!
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
};
