import React from "react";
import { HeaderView } from "./HeaderView";
import axios from "axios";
import { connect } from "react-redux";
import { setAuthUserDate } from "../../redux/authReducer";
import { useParams } from "react-router-dom";
import { toggleIsFetching } from "../../redux/authReducer";
import { setPhotoProfile } from "../../redux/authReducer";
import { AuthAPI, ProfileAPI } from "../../api/api";
class HeaderAPIContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        AuthAPI.getAuthMe().then((data) => {
            if (data.resultCode === 0) {
                const { id, email, login } = data.data;
                this.props.setAuthUserDate(id, email, login);
                this.props.toggleIsFetching(true);
                ProfileAPI.getProfileId(id).then((data) => {
                    this.props.setPhotoProfile(
                        data.photos.small ||
                            "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0"
                    );
                });
            }
        });
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
})(WithUrlDataContainerComponent);
