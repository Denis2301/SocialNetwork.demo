import { InferActionsTypes } from "./redux-store";

export type InitialStateType = typeof initialState;
type FriendsType = {
    id: number;
    name: string;
    url: string;
};
const initialState = {
    friends: [
        {
            id: 1,
            name: "Dmitry",
            url: "https://w7.pngwing.com/pngs/851/967/png-transparent-cat-computer-icons-creative-cat-mammal-cat-like-mammal-animals-thumbnail.png",
        },
        {
            id: 2,
            name: "Sasha",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYZ9Ok8xjEoczfzG7nxSHRW7SVJDLJimU8Vd0lNC-oSH_0fTGVCfpfHwQFMMgPVSGVc4k&usqp=CAU",
        },
        {
            id: 3,
            name: "Andrew",
            url: "https://w7.pngwing.com/pngs/851/967/png-transparent-cat-computer-icons-creative-cat-mammal-cat-like-mammal-animals-thumbnail.png",
        },
    ] as Array<FriendsType>,
};
export const actions = {
    sendSidebarCreator: () => ({ type: "SIDEBAR" } as const),
};
type ActionsTypes = InferActionsTypes<typeof actions>;
const sidebarReducer = (
    state = initialState,
    action: ActionsTypes
): InitialStateType => {
    switch (action.type) {
        case "SIDEBAR":
            return { ...state };
        default:
            return { ...state };
    }
};

export default sidebarReducer;
