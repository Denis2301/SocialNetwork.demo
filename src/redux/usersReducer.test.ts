import { UserType } from "@/types/types";
import usersReducer, { InitialStateType, actions } from "./usersReducer";
let initialState: InitialStateType;
beforeEach(() => {
    initialState = {
        users: [
            {
                id: 0,
                name: "Bob0",
                followed: false,
                status: "status0",
                photos: {
                    small: "",
                    large: "",
                },
                location: {
                    country: "string | undefined",
                    city: "string | undefined",
                },
            },
            {
                id: 1,
                name: "Bob1",
                followed: false,
                status: "status1",
                photos: {
                    small: "",
                    large: "",
                },
                location: {
                    country: "string | undefined",
                    city: "string | undefined",
                },
            },
            {
                id: 2,
                name: "Bob2",
                followed: true,
                status: "status2",
                photos: {
                    small: "",
                    large: "",
                },
                location: {
                    country: "string | undefined",
                    city: "string | undefined",
                },
            },
            {
                id: 3,
                name: "Bob3",
                followed: true,
                status: "status3",
                photos: {
                    small: "",
                    large: "",
                },
                location: {
                    country: "string | undefined",
                    city: "string | undefined",
                },
            },
        ],
        totalUsersCount: 0,
        currentPage: 1,
        pageSize: 10,
        isFetching: false,
        followingInProgress: [],
        filter: {
            term: "",
            friend: null,
        },
    };
});

test("check user followed", () => {
    let action = actions.acceptFollow(initialState.users[1].id);
    let newState = usersReducer(initialState, action);
    expect(newState.users[0].followed).toBeFalsy();
    expect(newState.users[1].followed).toBeTruthy();
});
test("check user unFollowed", () => {
    let action = actions.acceptUnfollow(initialState.users[3].id);
    let newState = usersReducer(initialState, action);
    expect(newState.users[2].followed).toBeTruthy();
    expect(newState.users[3].followed).toBeFalsy();
});
