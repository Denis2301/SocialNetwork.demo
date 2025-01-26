import React, { useEffect } from "react";
import objStyle from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { ProfileView } from "./Profile/ProfileView";
import { connect } from "react-redux";
import {
    getUserProfile,
    getUserStatus,
    updateUserStatus,
} from "../../redux/profileReducer";
import { compose } from "redux";
import { useParams } from "react-router-dom";
const ProfileAPIContainer = (props) => {
    let { id } = useParams();
    if (!id) {
        id = 32020;
    }
    useEffect(() => {
        props.getUserProfile(id);
        props.getUserStatus(id);
    }, [id]);

    return (
        <div className={objStyle.content}>
            <ProfileView
                status={props.status}
                profile={props.profile}
                updateUserStatus={props.updateUserStatus}
            />
            <main>
                <MyPostsContainer />
            </main>
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
    };
};

export default compose(
    connect(mapStateToProps, {
        getUserProfile,
        getUserStatus,
        updateUserStatus,
    })
)(ProfileAPIContainer);
