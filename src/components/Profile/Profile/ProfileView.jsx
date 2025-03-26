import objStyle from "./ProfileInfo.module.css";
import userPhoto from "../../.././assets/images/user.png";
import { Preloader } from "../../common/Preloader/Preloader";
import { ProfileStatusWithHooks } from "./ProfileStatusWithHooks";
import { useState } from "react";

export const ProfileView = ({
    isOwner,
    profile,
    status,
    updateUserStatus,
    savePhoto,
}) => {
    debugger;
    let [isMainPhoto, setIsMainPhoto] = useState(!profile?.photos.small);
    const onMainPhotoSelected = (e) => {
        setIsMainPhoto(false);
        if (e.target.files.length > 0) {
            savePhoto(e.target.files[0]).finally(() => {
                setIsMainPhoto(true);
            });
        }
    };
    return profile ? (
        <div>
            <section className={objStyle.describe__profile}>
                <div className={objStyle.describe__profile__image}>
                    {isMainPhoto ? (
                        <div className={objStyle.wrapperPhotoButtonProfile}>
                            <img
                                className={objStyle.mainPhoto}
                                src={
                                    profile.photos.small ||
                                    profile.photos.large ||
                                    userPhoto
                                }
                                alt="profile__image"
                            />
                            {!isOwner && (
                                <input
                                    type="file"
                                    onChange={onMainPhotoSelected}
                                    className={objStyle.photoButton}
                                />
                            )}
                        </div>
                    ) : (
                        <Preloader />
                    )}
                </div>

                <div className={objStyle.profileInform}>
                    <div className={objStyle.describe__profile__inform}>
                        <h2>{profile?.fullName}</h2>
                        <h3>
                            <ProfileStatusWithHooks
                                status={status}
                                updateUserStatus={updateUserStatus}
                            />
                        </h3>
                        <p>About Me: {profile?.aboutMe}</p>
                        <p style={{ display: "flex", alignItems: "center" }}>
                            LokingForJob:{" "}
                            {profile?.lookingForAJob ? (
                                <img
                                    style={{
                                        width: "30px",
                                        borderRadius: "50%",
                                    }}
                                    src="https://thumbs.dreamstime.com/z/emoji-%D0%B2-%D0%BF%D0%BE%D0%B8%D1%81%D0%BA%D0%B0%D1%85-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B-%D0%BB%D0%B8%D1%86%D0%BE-%D0%B6%D0%B5%D0%BB%D1%82%D0%B0%D1%8F-%D0%B8%D1%89%D1%83%D1%89%D0%B8%D1%85-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%83-%D1%81-%D0%BB%D1%83%D0%BF%D0%BE%D0%B9-%D0%BD%D0%B0%D0%B9%D1%82%D0%B8-187902691.jpg"
                                />
                            ) : (
                                <img
                                    style={{
                                        width: "30px",
                                        borderRadius: "50%",
                                    }}
                                    src="data:image/jpeg;base64,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"
                                />
                            )}
                        </p>
                        <p>Contact: {profile?.contact?.github || "no url"}</p>
                        <p>
                            Job Description:{" "}
                            {profile?.lookingForAJobDescription ||
                                "Job Description"}
                        </p>
                    </div>
                </div>
            </section>
        </div>
    ) : (
        <Preloader />
    );
};
