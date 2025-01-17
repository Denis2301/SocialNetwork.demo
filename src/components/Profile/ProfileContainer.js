import React from "react";
import objStyle from "./Profile.module.css";
import { MyPostsContainer } from "./MyPosts/MyPostsContainer";
import { ProfileView } from "./Profile/ProfileView";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { setProfileUser } from "../../redux/profileReducer";
class ProfileAPIContainer extends React.Component {
    componentDidMount() {
        let { userId } = this.props;
        if (!userId) {
            userId = 2;
        }
        this.props.setProfileUser(userId);
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
    setProfileUser,
})(WithUrlDataContainerComponent);
