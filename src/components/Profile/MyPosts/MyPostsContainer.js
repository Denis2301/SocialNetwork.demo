import { addPost, updateNewPostText } from "../../../redux/profileReducer";
import { MyPosts } from "./MyPosts";
import { connect } from "react-redux";
import { compose } from "redux";

const mapStateToMyPostsProps = (state) => {
    return {
        profilePage: state.profilePage.posts,
        newTextPost: state.profilePage.newTextPost,
    };
};
export default compose(
    connect(mapStateToMyPostsProps, {
        updateNewPostText,
        addPost,
    })
)(MyPosts);
