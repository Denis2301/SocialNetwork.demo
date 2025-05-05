import { actions } from "../../redux/sidebarReducer";
import { Sidebar } from "./Sidebar";
import { connect } from "react-redux";
import { AppStateType } from "@/redux/redux-store";
type MapStatePropsType = {
    sidebar: { friends: Array<{ id: number; name: string; url: string }> };
};
type OwnPropsType = {
    menuInd: number;
    handleMenuView: () => void;
};

type MapDispatchPropsType = {
    sendSidebarCreator: () => void;
};

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        sidebar: state.sidebar,
    };
};

// TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultRootState
export const SidebarContainer = connect<
    MapStatePropsType,
    MapDispatchPropsType,
    OwnPropsType,
    AppStateType
>(mapStateToProps, { sendSidebarCreator: actions.sendSidebarCreator })(Sidebar);
