import { ProfileAPI } from "../api/api";
const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";
const DELETE_POST = "DELETE_POST";
const initialState = {
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
    ],
    profile: null,
    status: "",
    // fake: 10,
};
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        // case "FAKE":
        //     return { ...state, fake: (state.fake += 1) };
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter((post) => post.id !== action.postId),
            };
        case ADD_POST:
            const dataNewPost = {
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYZ9Ok8xjEoczfzG7nxSHRW7SVJDLJimU8Vd0lNC-oSH_0fTGVCfpfHwQFMMgPVSGVc4k&usqp=CAU",
                message: action.newPostValue,
                likeCount: 0,
                author: "New Author",
                id: state.posts.length,
            };
            return {
                ...state,
                posts: [...state.posts, dataNewPost],
            };
        case SET_USER_STATUS:
            return { ...state, status: action.status };
        case SET_USER_PROFILE:
            return { ...state, profile: action.profile };
        default:
            return { ...state };
    }
};
export const addPost = (newPostValue) => ({ type: ADD_POST, newPostValue });
export const deletePost = (postId) => ({
    type: DELETE_POST,
    postId,
});

export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile,
});
export const setUserStatus = (status) => ({
    type: SET_USER_STATUS,
    status,
});

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await ProfileAPI.getProfileId(userId);

    dispatch(setUserProfile(response.data));
};
export const getUserStatus = (userId) => async (dispatch) => {
    let response = await ProfileAPI.getUserStatus(userId);

    dispatch(setUserStatus(response.data));
};
export const updateUserStatus = (status) => async (dispatch) => {
    let response = await ProfileAPI.updateUserStatus(status);

    if (!response.data.resultCode) {
        dispatch(setUserStatus(status));
    }
};
export default profileReducer;
