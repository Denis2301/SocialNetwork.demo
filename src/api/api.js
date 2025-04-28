import axios from "axios";
const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "1b4feacf-b1f1-4ab8-b176-2febf7c99546",
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
    logMe: async (email, password, rememberMe = false, captcha = null) => {
        return await instance.post(`auth/login`, {
            email,
            password,
            rememberMe,
            captcha,
        });
    },
    logOutMe: async () => {
        return await instance.delete(`auth/login`);
    },
};
export const SecurityAPI = {
    getCaptchaUrl: async () => {
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
    savePhoto: async (mainPhoto) => {
        const formData = new FormData();
        formData.append("image", mainPhoto);

        return await instance.put("profile/photo", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
    },
    saveProfile(profile) {
        return instance.put("profile", profile);
    },
};
