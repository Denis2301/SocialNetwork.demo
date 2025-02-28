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
import { useNavigate, useParams } from "react-router-dom";
import { withAuthRedirectComponent } from "../../hoc/LoginHOCRedirect";

const ProfileAPIContainer = (props) => {

    let { id } = useParams();
    let navigate = useNavigate();
    useEffect(() => {
        if (!id) {
            id = props.authorizedUserId;
            if (!id) {
                return navigate("/login");
            }
        }
        props.getUserProfile(id);
        props.getUserStatus(id);
    }, [id, props.authorizedUserId, navigate]);
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
        authorizedUserId: state.auth.id,
        isAuth: state.auth.isAuth,
    };
};

export default compose(
    connect(mapStateToProps, {
        getUserProfile,
        getUserStatus,
        updateUserStatus,
    })
)(ProfileAPIContainer);
