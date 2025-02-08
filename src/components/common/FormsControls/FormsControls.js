import React from "react";
import objStyle from "./FormsControls.module.css";

const FormControl = ({ meta, element, input, props }) => {
    const hasError = meta.error && meta.touched;
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
                    {meta.error}
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
