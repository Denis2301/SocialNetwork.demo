import React from "react";
import { sendSidebarCreator } from "../../redux/sidebarReducer";
import { Sidebar } from "./Sidebar";
import { connect } from "react-redux";

const mapStateToSidebarProps = (state, menuInd, handleMenuView) => {
    return {
        sidebar: state.sidebar,
        menuInd: menuInd,
        handleMenuView: handleMenuView,
    };
};
const mapDispatchToSidebarProps = (dispatch) => {
    return {
        onSendClick: () => {
            let action = sendSidebarCreator("SIDEBAR");
            dispatch(action);
        },
    };
};
export const SidebarContainer = connect(
    mapStateToSidebarProps,
    mapDispatchToSidebarProps
)(Sidebar);
