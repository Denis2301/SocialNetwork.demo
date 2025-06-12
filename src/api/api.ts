import axios from "axios";
export const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "1b4feacf-b1f1-4ab8-b176-2febf7c99546",
    },
});
export enum ResultCodeForCaptchaEnum {
    CaptchaIsRequired = 10,
}
export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
}
//users-api
export type GetItemsType<U> = {
    items: Array<U>;
    totalCount: number;
    error: string;
};
//auth-api & users-api & profile-api
export type APIResponseType<D = {}, RC = ResultCodesEnum | ResultCodeForCaptchaEnum> = {
    data: D;
    resultCode: RC;
    messages: Array<any>;
};
