import React from "react";
import objStyle from "./Profile.module.css";
import { MyPosts } from "./MyPosts/MyPosts";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

export const Profile = () => {
    return (
        <div className={objStyle.content}>
            <ProfileInfo
                name={"Denis"}
                birth={"Date of Birth: 23 January"}
                city={"Koryukivka"}
                edu={"USU '1"}
            />
            <main>
                <MyPosts />
            </main>
        </div>
    );
};
