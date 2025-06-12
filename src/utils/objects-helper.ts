import { UserType } from "@/types/types";

export const updateObjectInArray = (
    items: Array<UserType>,
    userId: number,
    newObjProps: { followed: boolean }
) => {
    return items.map((u: UserType) => (u["id"] == userId ? { ...u, ...newObjProps } : u));
};
