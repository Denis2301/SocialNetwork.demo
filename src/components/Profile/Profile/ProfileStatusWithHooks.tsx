import React, { ChangeEvent, FC, useEffect, useState } from "react";
import objStyle from "./ProfileInfo.module.css";

type PropsType = {
    status: string;
    updateUserStatus: (status: string) => void;
};

export const ProfileStatusWithHooks: FC<PropsType> = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);
    const activatedEditMode = () => {
        setEditMode(true);
    };
    const deactivatedEditMode = () => {
        setEditMode(false);
        props.updateUserStatus(status);
    };
    const onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.target.value);
    };
    return (
        <div className={objStyle.wrapperStatus}>
            <b>Status:</b>
            {!editMode && (
                <div className={objStyle.status}>
                    <span onDoubleClick={activatedEditMode}>
                        {status || "------"}
                    </span>
                </div>
            )}
            {editMode && (
                <div className={objStyle.status}>
                    <input
                        onChange={onChangeStatus}
                        autoFocus={true}
                        onBlur={deactivatedEditMode}
                        value={status}
                    />
                </div>
            )}
        </div>
    );
};
