const SIDEBAR = "SIDEBAR";

const sidebarReducer = (action, sidebar) => {
    switch (action.type) {
        case SIDEBAR:
            return sidebar;
        default:
            return sidebar;
    }
};
export const sendSidebarCreator = (type) => ({ type: type });
export default sidebarReducer;
