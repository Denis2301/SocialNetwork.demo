import { UserType } from "@/types/types";
import {
	APIResponseType,
	GetItemsType,
	instance
} from "./api";

type MeResponseUserType = {
    id: number;
    email: string;
    login: string;
};
export const UsersAPI = {
    getUsers: async (
        currentPage: number,
        pageSize: number,
        term: string,
        friend: boolean | null
    ) => {
        return await instance
            .get<GetItemsType<UserType>>(
                `users?page=${currentPage}&count=${pageSize}&term=${term}&friend=${
                    friend === null ? "" : friend
                }`
            )
            .then((response) => {
                return response.data;
            });
    },
    getFollow: async (id: number) => {
        return await instance
            .post<APIResponseType<MeResponseUserType>>(`follow/${id}`)
            .then((response) => response.data);
    },
    getUnFollow: async (id: number) => {
        return (await instance
            .delete(`follow/${id}`)
            .then((response) => response.data)) as Promise<APIResponseType>;
    },
};
