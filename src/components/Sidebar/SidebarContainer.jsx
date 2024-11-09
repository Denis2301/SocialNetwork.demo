import React from "react";
import { sendSidebarCreator } from "../../redux/sidebarReducer";
import { Sidebar } from "./Sidebar";
export const SidebarContainer = ({ store, menuInd, handleMenuView }) => {
    const onSend = () => {
        let action = sendSidebarCreator("SIDEBAR");
        store.dispatch(action);
    };

    return (
        <Sidebar
            onSendClick={onSend}
            sidebar={store.getState().sidebar}
            handleMenuView={handleMenuView}
            menuInd={menuInd}
        />
    );
};
