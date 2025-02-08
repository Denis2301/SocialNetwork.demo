import React from "react";
import { HeaderView } from "./HeaderView";
import { connect } from "react-redux";
import { setAuthUserDate } from "../../redux/authReducer";
import { useParams } from "react-router-dom";
import { toggleIsFetching } from "../../redux/authReducer";
import { setPhotoProfile } from "../../redux/authReducer";
import { getAuthUserData } from "../../redux/authReducer";
import { logOutMe } from "../../redux/authReducer";
import { compose } from "redux";

class HeaderAPIContainer extends React.Component {

    componentDidMount() {
        this.props.getAuthUserData();
    }
    render() {
        return <HeaderView {...this.props} />;
    }
}
const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        photo: state.auth.photo,
    };
};
const withRouter = (Component) => {
    return (props) => {
        const { id } = useParams();
        return <Component {...props} userId={id} />;
    };
};

export default compose(
    connect(mapStateToProps, {
        toggleIsFetching,
        setAuthUserDate,
        setPhotoProfile,
        getAuthUserData,
		logOutMe
    }),
    withRouter
)(HeaderAPIContainer);