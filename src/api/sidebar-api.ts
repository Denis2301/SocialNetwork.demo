import { UserType } from "@/types/types";
import { GetItemsType, instance } from "./api";

export const UsersAPI = {
    getFiends: async (currentPage = 1, pageSize = 10) => {
        return await instance
            .get<GetItemsType<UserType>>(
                `users?page=${currentPage}&count=${pageSize}&friend=${true}`
            )
            .then((response) => {
                return response.data;
            });
    },
};
