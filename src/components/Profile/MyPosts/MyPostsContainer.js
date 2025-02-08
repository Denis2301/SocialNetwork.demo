import { addPost } from "../../../redux/profileReducer";
import { MyPosts } from "./MyPosts";
import { connect } from "react-redux";
import { compose } from "redux";

const mapStateToMyPostsProps = (state) => {
    return {
        profilePage: state.profilePage.posts,
    };
};

export default compose(
    connect(mapStateToMyPostsProps, {
        addPost,
    })
)(MyPosts);
