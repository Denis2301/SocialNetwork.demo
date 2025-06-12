import { AppStateType } from "@/redux/redux-store";
import { actions } from "../../../redux/profileReducer";
import { MapStateType, MyDispatchType, MyPostsMemorized } from "./MyPosts";
import { connect } from "react-redux";
import { compose } from "redux";

const mapStateToProps = (state: AppStateType) => {
    return {
        profilePage: state.profilePage.posts,
    };
};

export default compose(
    // TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultRootState
    connect<MapStateType, MyDispatchType, {}, AppStateType>(
        mapStateToProps,
        {
            addPost: actions.addPost,
        }
    )
)(MyPostsMemorized);
