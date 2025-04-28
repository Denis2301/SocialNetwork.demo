import { FC } from "react";
import { connect } from "react-redux";
import { logOutMe } from "../../redux/authReducer";
import { compose } from "redux";
import { AppStateType } from "@/redux/redux-store";
import { HeaderView } from "./HeaderView";
type OwnPropsType = {
    menuInd: number;
    handleMenuView: () => void;
};
type MapStatePropsType = {
    login: string | null;
    photo: string | null;
};
type MapDispatchPropsType = {
    logOutMe: () => void;
};
type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType;

const HeaderAPIContainer: FC<PropsType> = ({
    handleMenuView,
    menuInd,
    photo,
    login,
    logOutMe,
}) => {
    return (
        <HeaderView
            photo={photo}
            login={login}
            logOutMe={logOutMe}
            handleMenuView={handleMenuView}
            menuInd={menuInd}
        />
    );
};
const mapStateToProps = (state: AppStateType) => {
    return {
        login: state.auth.login,
        photo: state.auth.photo,
    };
};

export default compose(
    // TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultRootState
    connect<
        MapStatePropsType,
        MapDispatchPropsType,
        OwnPropsType,
        AppStateType
    >(mapStateToProps, {
        logOutMe,
    })
)(HeaderAPIContainer);
