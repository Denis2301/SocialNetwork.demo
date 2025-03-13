import React from "react";
import objStyle from "./FormsControls.module.css";
import { Field } from "redux-form";
const FormControl = ({ meta, element, input, props }) => {
    const { error, touched } = meta;
    const hasError = error && touched;
    return (
        <>
            {React.createElement(element, {
                className: `${objStyle.formNewPost} ${
                    hasError ? objStyle.error : ""
                }`,
                ...input,
                ...props,
            })}
            {hasError ? (
                <span
                    style={{
                        color: "red",
                        marginRight: "auto",
                        marginTop: "5px",
                    }}
                >
                    {error}
                </span>
            ) : (
                ""
            )}
        </>
    );
};
export const Textarea = ({ input, meta, ...props }) => {
    return (
        <>
            <FormControl
                meta={meta}
                input={input}
                element={"textarea"}
                props={props}
            />
        </>
    );
};
export const Input = ({ input, meta, ...props }) => {
    return (
        <>
            <FormControl
                meta={meta}
                input={input}
                props={props}
                element={"input"}
            />
        </>
    );
};

export const createField = (
    validators,
    placeholder = null,
    type = "text",
    name,
    style,
    id = null,
    text = null
) => {
    return (
        <>
            <Field
                validate={validators}
                component={Input}
                placeholder={placeholder}
                type={type}
                name={name}
                style={{ ...style }}
                id={id}
            />
            {type == "checkbox" ? text : <label htmlFor={id}>{text}</label>}
        </>
    );
};
