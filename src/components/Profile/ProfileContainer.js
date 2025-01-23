import React from "react";
import objStyle from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { ProfileView } from "./Profile/ProfileView";
import { connect } from "react-redux";
import { getUserProfile } from "../../redux/profileReducer";
import { withAuthRedirectComponent } from "../../hoc/LoginHOCRedirect";
import { compose } from "redux";
class ProfileAPIContainer extends React.Component {
    componentDidMount() {
        let { userId } = this.props;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId);
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

export default compose(
    connect(mapStateToProps, {
        getUserProfile,
    }),
    withAuthRedirectComponent
)(ProfileAPIContainer);
