export const updateObjectInArray = (items,  userId, newObjProps) => {
    return items.map((u) =>
        u["id"] == userId ? { ...u, ...newObjProps } : u
    );
};
