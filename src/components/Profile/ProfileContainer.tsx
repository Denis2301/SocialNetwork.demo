import React, { Component, FC, useEffect } from "react";
import objStyle from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { ProfileView } from "./Profile/ProfileView";
import { connect } from "react-redux";
import {
    getUserProfile,
    getUserStatus,
    updateUserStatus,
    savePhoto,
    saveProfile,
} from "../../redux/profileReducer";
import { compose } from "redux";
import { useNavigate, useParams } from "react-router-dom";
import { AppStateType } from "@/redux/redux-store";
import { ProfileType } from "@/types/types";

type MapStatePropsType = {
    status: string | null;
    profile: any;
    authorizedUserId: number | null;
    profileUpdateStatus: boolean;
    isAuth: boolean;
};
type MapDispatchPropsType = {
    getUserProfile: (userId: number) => void;
    getUserStatus: (userId: number) => void;
    savePhoto: (file: any) => any;
    saveProfile: (profile: ProfileType) => void;
    updateUserStatus: (status: string) => void;
};
type PropsType = MapStatePropsType & MapDispatchPropsType;

const ProfileAPIContainer: FC<PropsType> = (props) => {
    let { id } = useParams();
    let navigate = useNavigate();
    let myId = Number(id) || props.authorizedUserId;
    useEffect(() => {
        if (!myId) {
            return navigate("/login");
        }
        props.getUserProfile(myId);
        props.getUserStatus(myId);
    }, [myId, props.authorizedUserId, navigate]);
    return (
        <div className={objStyle.content}>
            <ProfileView
                isOwner={!!id}
                status={props.status}
                profile={props.profile}
                updateUserStatus={props.updateUserStatus}
                savePhoto={props.savePhoto}
                saveProfile={props.saveProfile}
                profileUpdateStatus={props.profileUpdateStatus}
            />
            <main>
                <MyPostsContainer />
            </main>
        </div>
    );
};

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.id,
        isAuth: state.auth.isAuth,
        profileUpdateStatus: state.profilePage.profileUpdateStatus,
    };
};

export default compose(
    // TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultRootState
    connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(
        mapStateToProps,
        {
            getUserProfile,
            getUserStatus,
            updateUserStatus,
            savePhoto,
            saveProfile,
        }
    )
)(ProfileAPIContainer);
