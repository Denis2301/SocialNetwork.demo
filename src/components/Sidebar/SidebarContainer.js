import React from "react";
import { sendSidebarCreator } from "../../redux/sidebarReducer";
import { Sidebar } from "./Sidebar";
import { connect } from "react-redux";

const mapStateToSidebarProps = (state, ownProps) => {
    return {
        sidebar: state.sidebar,
        menuInd: ownProps.menuInd,
        handleMenuView: ownProps.handleMenuView,
    };
};
const mapStateToProps = (dispatch) => {
    return {
        onSendClick: () => {
            let action = sendSidebarCreator("SIDEBAR");
            dispatch(action);
        },
    };
};
export const SidebarContainer = connect(
    mapStateToSidebarProps,
    mapStateToProps
)(Sidebar);
