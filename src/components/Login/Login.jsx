import { reduxForm } from "redux-form";
import objStyle from "../Login/Login.module.css";
import { logMe } from "../../redux/authReducer";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { maxLengthCreator, required } from "../../utils/validators";
import { createField, Input } from "../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(40);
const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
    return (
        <form onSubmit={handleSubmit} className={objStyle.form}>
            {createField([required, maxLength10], "E-mail", "email", "email", {
                padding: "7px 5px",
                width: "100%",
            })}
            {createField(
                [required, maxLength10],
                "Password",
                "password",
                "password",
                {
                    padding: "7px 5px",
                    width: "100%",
                }
            )}
            {createField(
                null,
                null,
                "checkbox",
                "rememberMe",
                {
                    margin: "0px auto 10px 3px",
                },
                "remember_me",
                "Remember Me"
            )}
            {error && (
                <div className={objStyle.form_summary_error}>{error}</div>
            )}
            {/* {captchaUrl && (
                <div>
                    <Field
                        component={Input}
                        placeholder="Enter captcha"
                        name="captcha"
                        type="text"
                    />
                </div>
            )} */}
            <button className={objStyle.submit_form}>Submit</button>
        </form>
    );
};
const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);
const Login = ({ isAuth, captchaUrl, logMe }) => {
    let navigate = useNavigate();
    const onSubmit = async (formData, dispatch, { reset }) => {
        await logMe(formData.email, formData.password, formData.rememberMe);
        reset();
    };
    if (isAuth) {
        return navigate("/");
    } else {
        return (
            <div className={objStyle.login_wrapper}>
                <h1 className={objStyle.login__title}>Login</h1>
                <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
            </div>
        );
    }
};
const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth,
    error: state.form?.login?._error,
});
export default connect(mapStateToProps, { logMe })(Login);
