import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validators";
import {
    Input,
    Textarea,
    createField,
} from "../../common/FormsControls/FormsControls";
import objStyle from "./ProfileInfo.module.css";
import { ProfileStatusWithHooks } from "./ProfileStatusWithHooks";
const maxLength10 = maxLengthCreator(40);
const ProfileDataForm = ({
    status,
    updateUserStatus,
    handleSubmit,
    profile,
    error,
}) => {
    return (
        <form
            onSubmit={handleSubmit}
            className={objStyle.describe__profile__inform}
        >
            {" "}
            <h2 className={objStyle.fullName}>
                {" "}
                <b>Full name: </b>
                {createField(
                    [required, maxLength10],
                    "Full name",
                    null,
                    "fullName"
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
                {createField([required], null, "checkbox", "lookingForAJob", {
                    margin: "5px",
                })}
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
                    {Object.keys(profile.contacts).map((key) => (
                        <div key={key} className={objStyle.contact}>
                            <b>{key}:</b>
                            {createField(
                                [required, maxLength10],
                                key,
                                key,
                                "contacts." + key
                            )}
                        </div>
                    ))}
                </div>
            </p>
        </form>
    );
};
const ProfileDataFormRedux = reduxForm({ form: "edit-profile" })(
    ProfileDataForm
);
export default ProfileDataFormRedux;
