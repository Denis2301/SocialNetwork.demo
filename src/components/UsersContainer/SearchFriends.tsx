import { getFriendsFilter } from "../../redux/usersSelector";
import { Field, Form, Formik } from "formik";
import React, { FC } from "react";
import { useSelector } from "react-redux";

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
                    <Form>
                        <Field
                            style={{ padding: "5px 10px" }}
                            type="text"
                            name="term"
                        />
                        <Field as="select" name="friend">
                            <option value="null">All</option>
                            <option value="true">Only followed</option>
                            <option value="false">Only unfollowed</option>
                        </Field>
                        <button
                            style={{
                                backgroundColor: "#088b53",
                                color: "white",
                                padding: "5px 10px",
                            }}
                            type="submit"
                            disabled={isSubmitting}
                        >
                            Find
                        </button>
                    </Form>
                )}
            </Formik>
        );
    }
);
