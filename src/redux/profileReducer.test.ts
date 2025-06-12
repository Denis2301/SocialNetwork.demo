import { PostType, ProfileType } from "@/types/types";
import profileReducer, { actions } from "./profileReducer";

let state = {
    posts: [
        {
            url: "https://w7.pngwing.com/pngs/851/967/png-transparent-cat-computer-icons-creative-cat-mammal-cat-like-mammal-animals-thumbnail.png",
            message:
                "Hi, how are you? Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat soluta quod voluptas, quibusdam rerum perferendis aliquam! Ad praesentium commodi autem, quod laudantium possimus repudiandae ipsa maxime labore illo explicabo quisquam quas accusantium tempora, modi eaque dignissimos, ea inventore! Voluptate dolorem odio, eaque ad nemo accusantium, harum perspiciatis hic animi voluptatum quasi officiis maiores nihil autem? Totam beatae quaerat sit esse perspiciatis aspernatur nostrum obcaecati magnam atque dolor. Impedit ratione veritatis hic corrupti natus autem, ipsam harum totam voluptate dolore voluptatum ducimus corporis. Doloribus fugiat ipsa, consequuntur reiciendis omnis eligendi laudantium quas sequi tempora error quis veniam, est iure eum nam!Maxime nisi, in iste minus atque quae vel ut recusandae esse saepe magnam. Excepturi iste nihil labore officia explicabo, voluptatem cumque, ducimus quas amet non aperiam dolor voluptatum aspernatur. Obcaecati veritatis dolores architecto. Eveniet voluptatum vero consequatur sit rem beatae vel officia.",
            likeCount: 15,
            author: "Dmitry",
            id: 1,
        },
        {
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYZ9Ok8xjEoczfzG7nxSHRW7SVJDLJimU8Vd0lNC-oSH_0fTGVCfpfHwQFMMgPVSGVc4k&usqp=CAU",
            message: "Its my first post",
            likeCount: 20,
            author: "Sasha",
            id: 2,
        },
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    profileUpdateStatus: true,
    status: "",
};

test("length of posts should be increment", () => {
    let action = actions.addPost("zaibala bolnitza");
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(3);
});
test("message of new post should be correct", () => {
    let action = actions.addPost("zaibala bolnitza");
    let newState = profileReducer(state, action);
    expect(newState.posts[2].message).toBe("zaibala bolnitza");
});
test("after deleting length posts should be decrement", () => {
    let action = actions.deletePost(1);
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(1);
});
test("after deleting length shouldn`t decrement if id is incorrect", () => {
    let action = actions.deletePost(1000);
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(2);
});
