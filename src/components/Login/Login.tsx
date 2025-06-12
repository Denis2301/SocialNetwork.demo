import { AppStateType } from "@/redux/redux-store";
import { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { InjectedFormProps, reduxForm } from "redux-form";
import { logMe } from "../../redux/authReducer";
import { getCaptcha } from "../../redux/usersSelector";
import { maxLengthCreator, required } from "../../utils/validators";
import objStyle from "../Login/Login.module.css";
import {
	GetStringKeys,
	createField,
} from "../common/FormsControls/FormsControls";

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
type LoginFormValuesTypeKeys = GetStringKeys<LoginFormValuesType>;

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

const LoginPage: FC = () => {
    const captchaUrl: string | null = useSelector(getCaptcha);
    const isAuth: boolean = useSelector(
        (state: AppStateType) => state.auth.isAuth
    );
    const error = useSelector(
        (state: AppStateType) => state.form?.login?.error
    );
    let navigate = useNavigate();
    const onSubmit = async (
        formData: LoginFormValuesType,
        dispatch: any,
        { reset }: any
    ) => {
        dispatch(
            logMe(
                formData.email,
                formData.password,
                formData.rememberMe,
                formData.captcha
            )
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
                captcha={captchaUrl}
                error={error}
            />
        </div>
    );
};
export default LoginPage;
