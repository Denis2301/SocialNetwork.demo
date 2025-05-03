import { Field, InjectedFormProps, reduxForm } from "redux-form";
import objStyle from "../Login/Login.module.css";
import { logMe } from "../../redux/authReducer";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { maxLengthCreator, required } from "../../utils/validators";
import { createField, Input } from "../common/FormsControls/FormsControls";
import { FC, useEffect } from "react";
import { AppStateType } from "@/redux/redux-store";

const maxLength10 = maxLengthCreator(40);
type LoginFormValuesType = {
    email: string;
    password: string;
    rememberMe: boolean;
    captcha: string | null;
};
type LoginFormOwnProps = {
    captcha: string | null;
};
type LoginFormValuesTypeKeys = Extract<keyof LoginFormValuesType, string>;

const LoginForm: FC<
    InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> &
        LoginFormOwnProps
> = ({ handleSubmit, error, captcha }) => {
    return (
        <form onSubmit={handleSubmit} className={objStyle.form}>
            {createField<LoginFormValuesTypeKeys>(
                [required, maxLength10],
                "E-mail",
                "email",
                "email",
                {
                    padding: "7px 5px",
                    width: "100%",
                },
                "",
                ""
            )}
            {createField<LoginFormValuesTypeKeys>(
                [required, maxLength10],
                "Password",
                "password",
                "password",
                {
                    padding: "7px 5px",
                    width: "100%",
                },
                "",
                ""
            )}
            {createField<LoginFormValuesTypeKeys>(
                null,
                undefined,
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
            {captcha && (
                <div>
                    <img src={captcha} />
                    {createField<LoginFormValuesTypeKeys>(
                        [required],
                        "Enter captcha",
                        "text",
                        "captcha",
                        {
                            padding: "5px",
                        },
                        "",
                        ""
                    )}
                </div>
            )}
            <button className={objStyle.submit_form}>Submit</button>
        </form>
    );
};
const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({
    form: "login",
})(LoginForm);
type MyStatePropsType = {
    isAuth: boolean;
    captcha: string | null;
    error?: any;
};
type MyDispatchPropsType = {
    logMe: (
        email: string,
        password: string,
        rememberMe: boolean,
        captcha?: string | null
    ) => void;
};
type PropsType = MyStatePropsType & MyDispatchPropsType;
const Login: FC<PropsType> = ({ isAuth, captcha, error, logMe }) => {
    let navigate = useNavigate();
    const onSubmit = async (
        formData: LoginFormValuesType,
        dispatch: any,
        { reset }: any
    ) => {
        logMe(
            formData.email,
            formData.password,
            formData.rememberMe,
            formData.captcha
        );
        reset();
    };
    useEffect(() => {
        if (isAuth) {
            return navigate("/");
        }
    }, [isAuth]);
    return (
        <div className={objStyle.login_wrapper}>
            <h1 className={objStyle.login__title}>Login</h1>
            <LoginReduxForm
                onSubmit={onSubmit}
                captcha={captcha}
                error={error}
            />
        </div>
    );
};
const mapStateToProps = (state: AppStateType): MyStatePropsType => ({
    captcha: state.auth.captchaUrl,
    isAuth: state.auth.isAuth,
    error: state.form?.login?.error,
});
export default connect<MyStatePropsType, MyDispatchPropsType, {}, AppStateType>(
    mapStateToProps,
    { logMe }
)(Login);
