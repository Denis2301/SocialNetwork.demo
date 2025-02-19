import { addPost } from "../../../redux/profileReducer";
import { MyPosts } from "./MyPosts";
import { connect } from "react-redux";
import { compose } from "redux";

const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage.posts,
    };
};

export default compose(
    connect(mapStateToProps, {
        addPost,
    })
)(MyPosts);
