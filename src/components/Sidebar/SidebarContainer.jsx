import React from "react";
import { sendSidebarCreator } from "../../redux/sidebarReducer";
import { Sidebar } from "./Sidebar";
import StoreContext from "../../StoreContext";

export const SidebarContainer = ({ menuInd, handleMenuView }) => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();
                const onSend = () => {
                    let action = sendSidebarCreator("SIDEBAR");
                    store.dispatch(action);
                };
                return (
                    <Sidebar
                        onSendClick={onSend}
                        sidebar={state.sidebar}
                        handleMenuView={handleMenuView}
                        menuInd={menuInd}
                    />
                );
            }}
        </StoreContext.Consumer>
    );
};
