import React, { FC, JSX } from "react";
import objStyle from "./FormsControls.module.css";
import {
    Field,
    WrappedFieldInputProps,
    WrappedFieldMetaProps,
} from "redux-form";
import { FieldValidatorType } from "@/utils/validators";
type FormControlPropsType = {
    meta: WrappedFieldMetaProps;
    element: string;
    input: WrappedFieldInputProps;
    [key: string]: any;
};

const FormControl: FC<FormControlPropsType> = ({
    meta,
    element,
    input,
    ...restProps
}) => {
    const { error, touched } = meta;
    const hasError = error && touched;
    return (
        <>
            {React.createElement(element, {
                className: `${objStyle.formNewPost} ${
                    hasError ? objStyle.error : ""
                }`,
                ...input,
                ...restProps,
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
export type TextareaInputType = {
    input: WrappedFieldInputProps;
    meta: WrappedFieldMetaProps;
    [key: string]: any;
};
export const Textarea: FC<TextareaInputType> = ({
    input,
    meta,
    ...restProps
}) => {
    return (
        <>
            <FormControl
                meta={meta}
                input={input}
                element={"textarea"}
                {...restProps}
            />
        </>
    );
};
export const Input: FC<TextareaInputType> = ({ input, meta, ...restProps }) => {
    return (
        <>
            <FormControl
                meta={meta}
                input={input}
                element={"input"}
                {...restProps}
            />
        </>
    );
};

export function createField<FormKeysType extends string>(
    validators: Array<FieldValidatorType> | null,
    placeholder: string | undefined,
    type = "text",
    name: FormKeysType,
    style: React.CSSProperties | null,
    id: string,
    text: string
) {
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
}
