import React from "react";
import objStyle from "./MyPosts.module.css";
import { Post } from "./Post/Post";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);
let NewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                validate={[required, maxLength10]}
                name="newPostValue"
                component={Textarea}
                placeholder="Enter Your Message"
                rows="5"
                style={{
                    width: "100%",
                    padding: "10px",
                    boxSizing: "border-box",
                }}
            />
            <button className={objStyle.new__post__send}>Add Post.</button>
        </form>
    );
};

NewPostForm = reduxForm({ form: "post" })(NewPostForm);

export const MyPosts = React.memo(({ addPost, profilePage }) => {

    const onSubmit = async (formData) => {
        await addPost(formData.newPostValue);
    };
    return (
        <section className={objStyle.myPost}>
            <div
                className={objStyle.new__post}
                aria-labelledby={objStyle.new__post__title}
            >
                <h3
                    id={objStyle.new__post__title}
                    className={objStyle.new__post__title}
                >
                    My posts
                </h3>
                <NewPostForm onSubmit={onSubmit} />
            </div>
            <div className={objStyle.posts}>
                {[...profilePage].reverse().map((p) => {
                    return (
                        <Post
                            key={p.id}
                            url={p.url}
                            message={p.message}
                            likeCount={p.likeCount}
                            author={p.author}
                        />
                    );
                })}
            </div>
        </section>
    );
});
