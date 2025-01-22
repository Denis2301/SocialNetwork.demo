import { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const mapStateToPropsForRedirect = (state) => {
    return {
        isAuth: state.auth.isAuth,
    };
};
export const withAuthRedirectComponent = (Component) => {
    let ConnectedRedirectComponent = (props) => {
        let navigate = useNavigate();
        const { id } = useParams();
        useEffect(() => {
            if (!props.isAuth) {
                return navigate("/login");
            }
        }, [props.isAuth, navigate]);
        return <Component {...props} userId={id} />;
    };
    return connect(mapStateToPropsForRedirect)(ConnectedRedirectComponent);
};
