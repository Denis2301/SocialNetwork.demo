import { ContactsType, ProfileType } from "@/types/types";
import { FC } from "react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validators";
import {
	GetStringKeys,
	Textarea,
	createField
} from "../../common/FormsControls/FormsControls";
import objStyle from "./ProfileInfo.module.css";
import { ProfileStatusWithHooks } from "./ProfileStatusWithHooks";
const maxLength10 = maxLengthCreator(40);
export type ProfileFormValuesType = ProfileType
type ProfileFormOwnProps = {
    contacts: ContactsType;
    status: string;
    updateUserStatus: (status: string) => void;
};
type ProfileFormValuesTypeKeys = GetStringKeys<ProfileFormValuesType>;
const ProfileDataForm: FC<
    InjectedFormProps<ProfileFormValuesType, ProfileFormOwnProps> &
        ProfileFormOwnProps
> = ({ status, updateUserStatus, handleSubmit, contacts, error }) => {
    return (
        <form
            onSubmit={handleSubmit}
            className={objStyle.describe__profile__inform}
        >
            {" "}
            <h2 className={objStyle.fullName}>
                {" "}
                <b>Full name: </b>
                {createField<ProfileFormValuesTypeKeys>(
                    [required, maxLength10],
                    "Full name",
                    "",
                    "fullName",
                    null,
                    "",
                    ""
                )}
            </h2>
            <div>
                {" "}
                <button className={objStyle.edit}>Save</button>
            </div>
            {error && (
                <div className={objStyle.form_summary_error}>{error}</div>
            )}
            <h3>
                <ProfileStatusWithHooks
                    status={status}
                    updateUserStatus={updateUserStatus}
                />
            </h3>
            <p className={objStyle.aboutMe}>
                <b>About Me: </b>
                <Field
                    validate={[required, maxLength10]}
                    component={Textarea}
                    name={"aboutMe"}
                    placeholder={"About Me:"}
                />
            </p>{" "}
            <p style={{ display: "flex", alignItems: "center" }}>
                <b>Looking for a job:</b>
                {createField<ProfileFormValuesTypeKeys>(
                    [required],
                    undefined,
                    "checkbox",
                    "lookingForAJob",
                    {
                        margin: "5px",
                    },
                    "",
                    ""
                )}
            </p>
            <p>
                <b>My professional skils:</b>{" "}
            </p>
            {
                <Field
                    validate={[required, maxLength10]}
                    component={Textarea}
                    name={"lookingForAJobDescription"}
                    placeholder={"My professional skils"}
                />
            }
            <p>
                <b>Contacts:</b>
                <div className={objStyle.contacts}>
                    {Object.keys(contacts).map((key) => (
                        <div key={key} className={objStyle.contact}>
                            <b>{key}:</b>
                            {createField<ProfileFormValuesTypeKeys>(
                                [required, maxLength10],
                                key,
                                key,
                                "contacts." + key as keyof ProfileType,
                                null,
                                "",
                                ""
                            )}
                        </div>
                    ))}zz
                </div>
            </p>
        </form>
    );
};
const ProfileDataFormRedux = reduxForm<
    ProfileFormValuesType,
    ProfileFormOwnProps
>({ form: "edit-profile" })(ProfileDataForm);
export default ProfileDataFormRedux;
