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
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
type OwnPropsType = {
    pageTitle: string;
};
export type QueryParamsType = {
    term: string;
    friend: string;
    page: string;
};
export const UsersPage: FC<OwnPropsType> = ({ pageTitle }) => {
    const isFetching = useSelector(getIsFetching);
    const dispatch = useDispatch<AppDispatch>();
    const currentPage = useSelector(getCurrentPage);
    const pageSize = useSelector(getPageSize);
    const filter: FriendSearchFormType = useSelector(getFriendsFilter);
    const location = useLocation();
    const [searchParams] = useSearchParams(location.search);

    useEffect(() => {
        const { term, friend, page } = Object.fromEntries([
            ...searchParams,
        ]) as QueryParamsType;

        let actualPage: number = Number(page) || currentPage;
        let actualFilter;
        switch (friend) {
            case "null":
                actualFilter = { ...filter, term, friend: null };
                break;
            case "true":
                actualFilter = { ...filter, term, friend: true };
                break;
            case "false":
                actualFilter = { ...filter, term, friend: false };
                break;
            default:
                actualFilter = { ...filter, term, friend: null };
                break;
        }
        dispatch(requestUsers(actualPage, pageSize, actualFilter));
    }, []);
    return (
        <>
            <h2>{pageTitle}</h2>
            {isFetching ? <Preloader /> : <UsersView />}
        </>
    );
};
