import { AppStateType } from "@/redux/redux-store";
import { ProfileType } from "@/types/types";
import {
	ComponentType,
	FC,
	useEffect
} from "react";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { compose } from "redux";
import {
	getUserProfile,
	getUserStatus,
	savePhoto,
	saveProfile,
	updateUserStatus,
} from "../../redux/profileReducer";
import objStyle from "../Profile/Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { ProfileView } from "./Profile/ProfileView";

type MapStatePropsType = ReturnType<typeof mapStateToProps>;
type MapDispatchPropsType = {
    getUserProfile: (userId: number) => void;
    getUserStatus: (userId: number) => void;
    savePhoto: (mainPhoto: any) => any;
    saveProfile: (profile: ProfileType) => void;
    updateUserStatus: (status: string) => void;
};

type PropsType = MapStatePropsType & MapDispatchPropsType;
const ProfileAPIContainer: FC<PropsType> = (props) => {
    let { id } = useParams();
    let navigate = useNavigate();
    let myId: number | null = Number(id) || props.authorizedUserId;
    useEffect(() => {
        if (!myId) {
            console.error(
                new Error("Id should exists or in state authorizedUserId")
            );
            return navigate("/login");
        } else {
            props.getUserProfile(myId);
            props.getUserStatus(myId);
        }
    }, [id, navigate, myId, props.authorizedUserId]);
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

const mapStateToProps = (state: AppStateType) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.id,
        isAuth: state.auth.isAuth,
        profileUpdateStatus: state.profilePage.profileUpdateStatus,
    };
};

export default compose<ComponentType<PropsType>>(
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
