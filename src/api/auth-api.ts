
import { APIResponseType } from "./api";
import {  instance } from "./api";

type MeResponseDataType = {
    id: number;
    email: string;
    login: string;
};
type LoginResponseDataType = { userId: number };
export const AuthAPI = {
    getAuthMe: async () => {
        return await instance
            .get<APIResponseType<MeResponseDataType>>(`auth/me`)
            .then((response) => {
                return response.data;
            });
    },
    logMe: async (
        email: string,
        password: string,
        rememberMe = false,
        captcha: null | string = null
    ) => {
        return await instance
            .post<APIResponseType<LoginResponseDataType>>(`auth/login`, {
                email,
                password,
                rememberMe,
                captcha,
            })
            .then((response) => response.data);
    },
    logOutMe: async () => {
        return (await instance
            .delete(`auth/login`)
            .then((response) => response.data)) as Promise<APIResponseType>;
    },
};
