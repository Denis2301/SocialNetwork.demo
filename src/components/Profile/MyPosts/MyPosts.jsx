import React from "react";
import objStyle from "./MyPosts.module.css";
import { Post } from "./Post/Post";

export const MyPosts = (props) => {
    const postData = [
        {
            message:
                "Hi, how are you? Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat soluta quod voluptas, quibusdam rerum perferendis aliquam! Ad praesentium commodi autem, quod laudantium possimus repudiandae ipsa maxime labore illo explicabo quisquam quas accusantium tempora, modi eaque dignissimos, ea inventore! Voluptate dolorem odio, eaque ad nemo accusantium, harum perspiciatis hic animi voluptatum quasi officiis maiores nihil autem? Totam beatae quaerat sit esse perspiciatis aspernatur nostrum obcaecati magnam atque dolor. Impedit ratione veritatis hic corrupti natus autem, ipsam harum totam voluptate dolore voluptatum ducimus corporis. Doloribus fugiat ipsa, consequuntur reiciendis omnis eligendi laudantium quas sequi tempora error quis veniam, est iure eum nam!Maxime nisi, in iste minus atque quae vel ut recusandae esse saepe magnam. Excepturi iste nihil labore officia explicabo, voluptatem cumque, ducimus quas amet non aperiam dolor voluptatum aspernatur. Obcaecati veritatis dolores architecto. Eveniet voluptatum vero consequatur sit rem beatae vel officia.",

            likeCount: 15,
            author: "Dmitry",
            id: 1,
        },
        {
            message: "Its my first post",
            likeCount: 20,
            author: "Sasha",
            id: 2,
        },
    ];
    const Posts = postData.map((el, ind) => {
        return (
            <Post
                message={el.message}
                likeCount={el.likeCount}
                author={el.author}
                id={el.id}
            />
        );
    });
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
                <textarea
                    className={objStyle.new__post__text}
                    name=""
                    id=""
                    rows="5"
                >
                    Your text
                </textarea>
                <button className={objStyle.new__post__send}>Add Post.</button>
            </div>
            <div className={objStyle.posts}>{Posts}</div>
        </section>
    );
};
