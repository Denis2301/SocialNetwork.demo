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
    getFollow: async (id) => {
        return await instance.post(`follow/${id}`);
    },
    getUnFollow: async (id) => {
        return await instance.delete(`follow/${id}`);
    },
};
export const AuthAPI = {
    getAuthMe: async () => {
        return await instance.get(`auth/me`);
    },
    logMe: async (email, password, rememberMe = false) => {
        return await instance.post(`auth/login`, {
            email,
            password,
            rememberMe,
        });
    },
    logOutMe: async () => {
        return await instance.delete(`auth/login`);
    },
    captcha: async () => {
        return await instance.get("security/get-captcha-url");
    },
};
export const ProfileAPI = {
    getProfileId: async (id) => {
        return await instance.get(`profile/${id}`);
    },
    getUserStatus: async (id) => {
        return await instance.get(`profile/status/${id}`);
    },
    updateUserStatus: async (status) => {
        return await instance.put(`profile/status`, { status });
    },
};
