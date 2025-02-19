import { Field, reduxForm } from "redux-form";
import objStyle from "../Login/Login.module.css";
import { logMe } from "../../redux/authReducer";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { maxLengthCreator, required } from "../../utils/validators";
import { Input } from "../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(40);
const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={objStyle.form}>
            <Field
                validate={[required, maxLength10]}
                component={Input}
                placeholder="E-mail"
                type="email"
                name={"email"}
                style={{
                    padding: "7px 5px",
                    width: "100%",
                }}
            />
            <Field
                validate={[required, maxLength10]}
                component={Input}
                placeholder="Password"
                name={"password"}
                type="password"
                style={{
                    padding: "7px 5px",
                    width: "100%",
                }}
            />
            <label htmlFor="remember_me">Remember Me</label>
            <Field
                validate={[required]}
                component={Input}
                type="checkbox"
                name={"rememberMe"}
                id="remember_me"
                style={{
                    margin: "0px auto 0px 3px",
                }}
            />
            {props.error && (
                <div className={objStyle.form_summary_error}>{props.error}</div>
            )}
            {/* {props.captchaUrl && (
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
const Login = (props) => {
    let navigate = useNavigate();
    const onSubmit = async (formData, dispatch, { reset }) => {
        await props.logMe(
            formData.email,
            formData.password,
            formData.rememberMe
        );
        reset();
    };
    if (props.isAuth) {
        return navigate("/");
    } else {
        return (
            <div className={objStyle.login_wrapper}>
                <h1 className={objStyle.login__title}>Login</h1>
                <LoginReduxForm
                    onSubmit={onSubmit}
                    captchaUrl={props.captchaUrl}
                />
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
