const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";

const profileReducer = (action, profilePage) => {
    switch (action.type) {
        case ADD_POST:
            const dataNewPost = {
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYZ9Ok8xjEoczfzG7nxSHRW7SVJDLJimU8Vd0lNC-oSH_0fTGVCfpfHwQFMMgPVSGVc4k&usqp=CAU",
                message: profilePage.newTextPost,
                likeCount: 0,
                author: "New Author",
                id: profilePage.posts.length,
            };
            profilePage.posts.push(dataNewPost);
            profilePage.newTextPost = "";
            return profilePage;
        case UPDATE_NEW_POST_TEXT:
            profilePage.newTextPost = action.newText;
            return profilePage;
        default:
            return profilePage;
    }
};
export const addPostCreator = (type) => ({ type: type });
export const updateNewPostTextCreator = (type, text) => ({
    type: type,
    newText: text,
});
export default profileReducer;
