import { PhotosType, ProfileType } from "./../types/types";
import { APIResponseType } from "./api";
import { instance } from "./api";

type SavePhotoResponseDataType = { photos: PhotosType };

export const ProfileAPI = {
    getProfileId: async (id: number | null) => {
        return await instance
            .get<ProfileType>(`profile/${id}`)
            .then((response) => response.data);
    },
    getUserStatus: async (id: number | null) => {
        return await instance
            .get<string>(`profile/status/${id}`)
            .then((response) => response.data);
    },
    updateUserStatus: async (status: string) => {
        return await instance
            .put<APIResponseType>(`profile/status`, {
                status,
            })
            .then((response) => response.data);
    },
    savePhoto: async (mainPhoto: File) => {
        const formData = new FormData();
        formData.append("image", mainPhoto);

        return await instance
            .put<APIResponseType<SavePhotoResponseDataType>>(
                "profile/photo",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            )
            .then((response) => response.data);
    },
    saveProfile(profile: ProfileType) {
        return instance
            .put<APIResponseType<ProfileType>>("profile", profile)
            .then((response) => response.data);
    },
};
