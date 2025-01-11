import axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "505215d5-2d1d-487e-910b-13cce052d531",
    },
});
export const UsersAPI = {
    getUsers: async (currentPage = 2, pageSize = 10) => {
        return await instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then((response) => {
                return response.data;
            });
    },
};
export const AuthAPI = {
    getAuthMe: async () => {
        return await instance.get(`auth/me`).then((response) => {
            return response.data;
        });
    },
};
export const ProfileAPI = {
    getProfileId: async (id) => {
        return await instance.get(`profile/${id}`).then((response) => {
            return response.data;
        });
    },
};
export const FollowAPI = {
    getFollow: async (id) => {
        return await instance.post(`follow/${id}`);
    },
    getUnFollow: async (id) => {
        return await instance.delete(`follow/${id}`);
    },
};
