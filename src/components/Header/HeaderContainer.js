import React from "react";
import { HeaderView } from "./HeaderView";
import { connect } from "react-redux";
import { setAuthUserDate } from "../../redux/authReducer";
import { useParams } from "react-router-dom";
import { toggleIsFetching } from "../../redux/authReducer";
import { setPhotoProfile } from "../../redux/authReducer";
import { gatAuthUserData } from "../../redux/authReducer";

class HeaderAPIContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.gatAuthUserData();
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
let WithUrlDataContainerComponent = withRouter(HeaderAPIContainer);
export const HeaderContainer = connect(mapStateToProps, {
    toggleIsFetching,
    setAuthUserDate,
    setPhotoProfile,
    gatAuthUserData,
})(WithUrlDataContainerComponent);
