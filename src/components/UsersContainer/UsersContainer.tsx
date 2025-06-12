import { FC, useEffect } from "react";
import { UsersView } from "./UsersView";
import { useDispatch, useSelector } from "react-redux";
import { Preloader } from "../common/Preloader/Preloader";
import { FriendSearchFormType, requestUsers } from "../../redux/usersReducer";
import {
    getCurrentPage,
    getIsFetching,
    getPageSize,
    getFriendsFilter,
} from "../../redux/usersSelector";
import { AppDispatch } from "@/redux/redux-store";
type OwnPropsType = {
    pageTitle: string;
};

export const UsersPage: FC<OwnPropsType> = ({ pageTitle }) => {
    const isFetching = useSelector(getIsFetching);
    const dispatch = useDispatch<AppDispatch>();
    const currentPage: number = useSelector(getCurrentPage);
    const pageSize: number = useSelector(getPageSize);
    const filter: FriendSearchFormType = useSelector(getFriendsFilter);
    useEffect(() => {
        dispatch(requestUsers(currentPage, pageSize, filter));
    }, []);
    return (
        <>
            <h2>{pageTitle}</h2>
            {isFetching ? <Preloader /> : <UsersView />}
        </>
    );
};
