import { getFriendsFilter } from "../../redux/usersSelector";
import { Field, Form, Formik } from "formik";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import { Form as AntForm, SubmitButton, Input, Select } from "formik-antd";

const { Option } = Select;
const friendsSearchFormValidate = (values: any) => {
    // const errors = {};
    // if (!values.email) {
    //     errors.email = "Required";
    // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    //     errors.email = "Invalid email address";
    // }
    // return errors;
};
//! Есть два FriendSearchFormType. Один для редюсера, второй для формы.
type FriendSearchFormType = {
    friend: any;
    term: string;
};
type PropsType = {
    onFilterChange: (filter: FriendSearchFormType) => void;
};

export const SearchFriendsForm: FC<PropsType> = React.memo(
    ({ onFilterChange }) => {
        const filter: FriendSearchFormType = useSelector(getFriendsFilter);
        const submit = (
            values: FriendSearchFormType,
            {
                setSubmitting,
            }: { setSubmitting: (isSubmitting: boolean) => void }
        ) => {
            const filter: FriendSearchFormType = {
                term: values.term,
                friend:
                    values.friend === "true"
                        ? true
                        : values.friend === "false"
                        ? false
                        : null,
            };
            onFilterChange(filter);
            setSubmitting(false);
        };
        return (
            <Formik
                initialValues={{
                    term: filter.term,
                    friend: String(filter.friend),
                }}
                enableReinitialize
                onSubmit={submit}
            >
                {({ isSubmitting }) => (
                    <AntForm layout="inline">
                        <AntForm.Item name="term">
                            <Input name="term" placeholder="Search users" />
                        </AntForm.Item>
                        <AntForm.Item name="friend">
                            <Select name="friend">
                                <Option value="null">All</Option>
                                <Option value="true">Only followed</Option>
                                <Option value="false">Only unfollowed</Option>
                            </Select>
                        </AntForm.Item>
                        <AntForm.Item name={"find"}>
                            <SubmitButton
                                type="primary"
                                disabled={isSubmitting}
                            >
                                Find
                            </SubmitButton>
                        </AntForm.Item>
                    </AntForm>
                )}
            </Formik>
        );
    }
);
