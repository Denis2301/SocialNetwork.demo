import { Sidebar } from "./Sidebar";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/redux-store";
import { requestFriends } from "../../redux/sidebarReducer";
type MapStatePropsType = ReturnType<typeof mapStateToProps>;

type OwnPropsType = {
    menuInd: boolean;
    handleMenuView: () => void;
};

type MapDispatchPropsType = {
    requestFriends: () => void;
};

const mapStateToProps = (state: AppStateType) => {
    return {
        friends: state.sidebar.friends,
    };
};

// TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultRootState
export const SidebarContainer = connect<
    MapStatePropsType,
    MapDispatchPropsType,
    OwnPropsType,
    AppStateType
>(mapStateToProps, { requestFriends })(Sidebar);
