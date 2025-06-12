import React, { FC } from "react";
import objStyle from "./MyPosts.module.css";
import { Post } from "./Post/Post";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { required } from "../../../utils/validators";
import {
    GetStringKeys,
    Textarea,
} from "../../common/FormsControls/FormsControls";
import { PostType } from "@/types/types";

type NewPostValuesType = {
    newPostValue: string;
};
type NewPostValuesTypeKeys = GetStringKeys<NewPostValuesType>;
type NewPostOwnProps = {};

let NewPostForm: FC<
    InjectedFormProps<NewPostValuesType, NewPostOwnProps> & NewPostOwnProps
> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                validate={[required]}
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

const NewPostReduxForm = reduxForm<NewPostValuesType, NewPostOwnProps>({
    form: "post",
})(NewPostForm);
export type MyDispatchType = {
    addPost: (newPostValue: string) => void;
};
export type MapStateType = { profilePage: Array<PostType> };
type PropsType = MapStateType & MyDispatchType;
const MyPosts: FC<PropsType> = ({ addPost, profilePage }) => {
    const onSubmit = async (formData: NewPostValuesType) => {
        addPost(formData.newPostValue);
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
};
export const MyPostsMemorized = React.memo(MyPosts);
