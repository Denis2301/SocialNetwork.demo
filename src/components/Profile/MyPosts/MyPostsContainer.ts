import { AppStateType } from "@/redux/redux-store";
import { addPost } from "../../../redux/profileReducer";
import { MyPosts } from "./MyPosts";
import { connect } from "react-redux";
import { compose } from "redux";
import { PostType } from "@/types/types";

type MapStatePropsType = {
	profilePage: Array<PostType>
}
type MapDispatchPropsType = {
	addPost: (newPostValue: string) => void;
}
const mapStateToProps = (state: AppStateType) => {
    return {
        profilePage: state.profilePage.posts,
    };
};

export default compose(
    // TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultRootState
    connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {
        addPost,
    })
)(MyPosts);
