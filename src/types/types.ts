import { ResultCodeForCaptcha, ResultCodesEnum } from "@/api/api";

export type PhotosType = {
    small?: string | null;
    large?: string | null;
};

export type UserType = {
    id: number;
    name: string;
    followed: boolean;
    status: string;
    photos: PhotosType;
    location?: { country?: string; city?: string };
};
export type PostType = {
    url: string;
    message: string;
    likeCount: number;
    author: string;
    id: number;
};

export type ContactsType = {
    facebook?: string;
    website?: string;
    vk?: string;
    twitter?: string;
    instagram?: string;
    youtube?: string;
    github?: string;
    mainLink?: string;
};
export type ProfileType = {
    data: any;
    messages: any;
    resultCode: ResultCodeForCaptcha | ResultCodesEnum;
    aboutMe: string;
    contacts: ContactsType;
    lookingForAJob: boolean;
    lookingForAJobDescription?: string;
    fullName: string;
    userId: number;
    photos: PhotosType;
};
export type DateType = {
    year: number;
    month: number;
    date: number;
};
