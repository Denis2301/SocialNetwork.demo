import { ProfileType, UserType } from "./../types/types";
import axios, { AxiosResponse } from "axios";
const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "1b4feacf-b1f1-4ab8-b176-2febf7c99546",
    },
});
export type GetUsersType = {
    items: Array<UserType>;
    totalCount: number;
    error: string;
};
export type UserFollowUnFollowType = {
    data: {};
    resultCode: ResultCodesEnum;
    messages: Array<string>;
};
export const UsersAPI = {
    getUsers: async (currentPage = 2, pageSize = 10) => {
        return await instance
            .get<GetUsersType>(`users?page=${currentPage}&count=${pageSize}`)
            .then((response) => {
                return response.data;
            });
    },
    getFollow: async (id: number) => {
        return await instance
            .post<UserFollowUnFollowType>(`follow/${id}`)
            .then((response) => response.data);
    },
    getUnFollow: async (id: number) => {
        return await instance
            .delete<UserFollowUnFollowType>(`follow/${id}`)
            .then((response) => response.data);
    },
};
export enum ResultCodeForCaptcha {
    CaptchaIsRequired = 10,
}
export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
}
export type MeResponseType = {
    data: {
        id: number;
        email: string;
        login: string;
    };
    resultCode: ResultCodesEnum;
    messages: Array<string>;
};
export type LoginResponseType = {
    data: {
        userId?: number;
    };
    resultCode: ResultCodesEnum | ResultCodeForCaptcha;
    messages: Array<string>;
};
export const AuthAPI = {
    getAuthMe: async () => {
        return await instance
            .get<MeResponseType>(`auth/me`)
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
            .post<LoginResponseType>(`auth/login`, {
                email,
                password,
                rememberMe,
                captcha,
            })
            .then((response) => response.data);
    },
    logOutMe: async () => {
        return await instance
            .delete<LoginResponseType>(`auth/login`)
            .then((response) => response.data);
    },
};

export const SecurityAPI = {
    getCaptchaUrl: async () => {
        return await instance.get("security/get-captcha-url");
    },
};
export type ProfileOperationType = {
    data: { photos: { small?: string; large?: string } };
    resultCode: ResultCodesEnum;
    messages: Array<any>;
};
export const ProfileAPI = {
    getProfileId: async (id: number) => {
        return await instance
            .get<ProfileType>(`profile/${id}`)
            .then((response) => response.data);
    },
    getUserStatus: async (id: number) => {
        return await instance
            .get(`profile/status/${id}`)
            .then((response) => response.data);
    },
    updateUserStatus: async (status: string) => {
        return await instance
            .put<ProfileOperationType>(`profile/status`, { status })
            .then((response) => response.data);
    },
    savePhoto: async (mainPhoto: File) => {
        const formData = new FormData();
        formData.append("image", mainPhoto);

        return await instance
            .put<ProfileOperationType>("profile/photo", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((response) => response.data);
    },
    saveProfile(profile: ProfileType) {
        return instance
            .put<ProfileOperationType>("profile", profile)
            .then((response) => response.data);
    },
};
