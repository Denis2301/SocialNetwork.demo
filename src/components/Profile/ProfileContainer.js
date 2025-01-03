import React from "react";
import objStyle from "./Profile.module.css";
import { MyPostsContainer } from "./MyPosts/MyPostsContainer";
import { ProfileView } from "./Profile/ProfileView";
import axios from "axios";
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/profileReducer";
import { useParams } from "react-router-dom";

class ProfileAPIContainer extends React.Component {
    componentDidMount() {
        let { userId } = this.props;
        if (!userId) {
			userId = 2;
		}
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/profile/${userId}`
            )
            .then((response) => {
                this.props.setUserProfile(response.data);
            });
    }

    render() {
        return (
            <div className={objStyle.content}>
                <ProfileView profile={this.props.profile} />
                <main>
                    <MyPostsContainer />
                </main>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.user,
    };
};
const withRouter = (Component) => {
    return (props) => {
        const { id } = useParams();
        return <Component {...props} userId={id} />;
    };
};
let WithUrlDataContainerComponent = withRouter(ProfileAPIContainer);
export const ProfileContainer = connect(mapStateToProps, {
    setUserProfile,
})(WithUrlDataContainerComponent);
