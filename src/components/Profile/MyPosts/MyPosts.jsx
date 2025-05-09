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
                component={Textarea}
                placeholder="Enter Your Message"
                name="newPostValue"
                rows="5"
                style={{
                    width: "100%",
                    padding: "10px",
                    display: "block",
                }}
            />
            <button className={objStyle.new__post__send}>Add Post.</button>
        </form>
    );
};

const NewPostReduxForm = reduxForm({ form: "post" })(NewPostForm);

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
                <NewPostReduxForm onSubmit={onSubmit} />
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
