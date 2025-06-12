import { UsersAPI } from "./../api/users-api";
import { actions, follow, unFollow } from "./usersReducer";
import { APIResponseType, ResultCodesEnum } from "../api/api";
jest.mock("../api/users-api");

const UsersAPIMock = UsersAPI as jest.Mocked<typeof UsersAPI>;
const result: APIResponseType<{ id: number; email: string; login: string }> = {
    data: { id: 1, email: "test@mail.com", login: "testuser" },
    resultCode: ResultCodesEnum.Success,
    messages: [],
};

let dispatchMock = jest.fn();
let getStateMock = jest.fn();
afterEach(() => {
    dispatchMock.mockClear();
    getStateMock.mockClear();
});
test("success follow thunk", async () => {
    let thunk = follow(1);

    UsersAPIMock.getFollow.mockReturnValue(Promise.resolve(result));

    await thunk(dispatchMock, getStateMock, {});
    expect(dispatchMock).toBeCalledTimes(3);
    expect(dispatchMock).toHaveBeenNthCalledWith(
        1,
        actions.toggleIsFollowing(1, true)
    );
    expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.acceptFollow(1));
    expect(dispatchMock).toHaveBeenNthCalledWith(
        3,
        actions.toggleIsFollowing(1, false)
    );
});
test("success unFollow thunk", async () => {
    let thunk = unFollow(1);

    UsersAPIMock.getUnFollow.mockReturnValue(Promise.resolve(result));

    await thunk(dispatchMock, getStateMock, {});
    expect(dispatchMock).toBeCalledTimes(3);
    expect(dispatchMock).toHaveBeenNthCalledWith(
        1,
        actions.toggleIsFollowing(1, true)
    );
    expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.acceptUnfollow(1));
    expect(dispatchMock).toHaveBeenNthCalledWith(
        3,
        actions.toggleIsFollowing(1, false)
    );
});
