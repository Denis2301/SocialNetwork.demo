import React, { useEffect, useState } from "react";
import objStyle from "./ProfileInfo.module.css";

export const ProfileStatusWithHooks = (props) => {
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
    const onChangeStatus = (e) => {
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
