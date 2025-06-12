import { stopSubmit } from "redux-form";
import { ResultCodesEnum } from "../api/api";
import { PhotosType, PostType, ProfileType } from "@/types/types";
import { InferActionsTypes, CommonThunkType } from "./redux-store";
import { ProfileAPI } from ".././api/profile-api";

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
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    profileUpdateStatus: true,
    status: "",
};
export type InitialStateType = typeof initialState;
export const actions = {
    addPost: (newPostValue: string) =>
        ({
            type: "PROFILE/ADD_POST",
            newPostValue,
        } as const),

    deletePost: (postId: number) =>
        ({
            type: "PROFILE/DELETE_POST",
            postId,
        } as const),

    setUserProfile: (profile: ProfileType) =>
        ({
            type: "PROFILE/SET_USER_PROFILE",
            profile,
        } as const),

    setUserStatus: (status: string) =>
        ({
            type: "PROFILE/SET_USER_STATUS",
            status,
        } as const),

    setPhotoSuccess: (photos: PhotosType) =>
        ({
            type: "PROFILE/SAVE_PHOTO_SUCCESS",
            photos,
        } as const),
};

const profileReducer = (
    state = initialState,
    action: ActionsTypes
): InitialStateType => {
    switch (action.type) {
        case "PROFILE/DELETE_POST":
            return {
                ...state,
                posts: state.posts.filter((post) => post.id !== action.postId),
            };
        case "PROFILE/ADD_POST":
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
        case "PROFILE/SET_USER_STATUS":
            return { ...state, status: action.status };
        case "PROFILE/SAVE_PHOTO_SUCCESS":
            return {
                ...state,
                profile: {
                    ...state.profile,
                    photos: action.photos,
                } as ProfileType,
            };
        case "PROFILE/SET_USER_PROFILE":
            return { ...state, profile: action.profile };

        default:
            return { ...state };
    }
};

export const getUserProfile =
    (userId: number | null): ThunkType =>
    async (dispatch) => {
        let response = await ProfileAPI.getProfileId(userId);

        dispatch(actions.setUserProfile(response));
    };
export const getUserStatus =
    (userId: number | null): ThunkType =>
    async (dispatch) => {
        let response = await ProfileAPI.getUserStatus(userId);

        dispatch(actions.setUserStatus(response));
    };
export const savePhoto =
    (mainPhoto: File): ThunkType =>
    async (dispatch) => {
        let response = await ProfileAPI.savePhoto(mainPhoto);
        dispatch(actions.setPhotoSuccess(response.data.photos));
    };
export const saveProfile =
    (profile: ProfileType): ThunkType =>
    async (dispatch, getState) => {
        const userId = getState().auth.id;
        let response = await ProfileAPI.saveProfile(profile);
        if (response.resultCode == ResultCodesEnum.Success) {
            if (userId === 0) {
                throw new Error("userId cannot be null");
            }
            dispatch(getUserProfile(userId));
            getState().profilePage.profileUpdateStatus = true;
            return Promise.resolve("Ok");
        } else {
            let message =
                response.messages.length > 0 && response.messages[0] !== null
                    ? response.messages[0]
                    : "Common error";
            let errorKey = message.match(/Contacts->(.+?)\)/)[1].toLowerCase();
            let errorValue = message.match(/\((Contacts->.+?)\)/)[1];
            dispatch(
                stopSubmit("edit-profile", {
                    contacts: {
                        [errorKey]: [errorValue],
                    },
                })
            );
            getState().profilePage.profileUpdateStatus = false;
        }
    };
export const updateUserStatus =
    (status: string): ThunkType =>
    async (dispatch, getState) => {
        let prevState = getState().profilePage.status;
        try {
            let response = await ProfileAPI.updateUserStatus(status);
            if (response.resultCode == ResultCodesEnum.Success) {
                dispatch(actions.setUserStatus(status));
            }
        } catch (error) {
            dispatch(actions.setUserStatus(prevState == null ? "" : prevState));
            console.warn("Failed to update status:", error);
        }
    };
export default profileReducer;
type ActionsTypes = InferActionsTypes<typeof actions>;
type ThunkType = CommonThunkType<ActionsTypes | ReturnType<typeof stopSubmit>>;
