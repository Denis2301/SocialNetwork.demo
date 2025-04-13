import "./App.css";
import { News } from "./components/News/News";
import React, { useState, useEffect, lazy } from "react";
import {
    Routes,
    Route,
    Navigate,
    BrowserRouter,
    redirect,
} from "react-router-dom";
import { Music } from "./components/Music/Music";
import { Settings } from "./components/Settings/Settings";
import { SidebarContainer } from "./components/Sidebar/SidebarContainer";
import UsersContainer from "./components/UsersContainer/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import { Provider, connect } from "react-redux";
import { initializeApp, globalErrorDispatch } from "./redux/appReducer";
import { compose } from "redux";
import { Preloader } from "./components/common/Preloader/Preloader";
import { SuspenseHOC } from "./hoc/SuspenceHOC";

let DialogsContainer = lazy(() =>
    import("./components/Dialogs/DialogsContainer")
);
let ProfileContainer = lazy(() =>
    import("./components/Profile/ProfileContainer")
);
let LoginPage = lazy(() => import("./components/Login/Login"));

const App = ({
    globalErrorDispatch,
    globalError,
    initializeApp,
    initialized,
}) => {
    const [menuInd, menuChangeView] = useState(false);
    const handleMenuView = () => {
        menuChangeView(!menuInd);
    };
    const catchAllUnhandleError = async (event) => {
        const errorMessage = event.reason + "";
        await globalErrorDispatch(errorMessage);
    };
    useEffect(() => {
        initializeApp();

        // Promise.reject(new Error("Test error without catch"));

        window.addEventListener("unhandledrejection", catchAllUnhandleError);

        return () => {
            window.removeEventListener(
                "unhandledrejection",
                catchAllUnhandleError
            );
        };
    }, [initializeApp]);
    {
        return initialized ? (
            <div className="wrapper">
                <HeaderContainer
                    handleMenuView={handleMenuView}
                    menuInd={menuInd}
                />
                <SidebarContainer
                    handleMenuView={handleMenuView}
                    menuInd={menuInd}
                />
                <div className="wrapper-content">
                    <Routes>
                        <Route path="/" element={<Navigate to="/profile" />} />
                        <Route
                            path="/SocialNetwork.demo"
                            element={<Navigate to="/profile" />}
                        />
                        <Route
                            path="/profile/:id?"
                            element={SuspenseHOC(ProfileContainer)()}
                        />
                        <Route
                            path="/dialogs/*"
                            element={SuspenseHOC(DialogsContainer)()}
                        />
                        <Route path="/users/*" element={<UsersContainer />} />
                        <Route path="/news/*" element={<News />} />
                        <Route path="/music/*" element={<Music />} />
                        <Route path="/settings/*" element={<Settings />} />
                        <Route
                            path="/login*"
                            element={SuspenseHOC(LoginPage)()}
                        />
                        <Route
                            path="*"
                            element={
                                <div className="error">
                                    Error 404. Not found.
                                </div>
                            }
                        />
                    </Routes>
                </div>
                {globalError && (
                    <div
                        className="error"
                        style={{
                            position: "fixed",
                            width: "100%",
                            zIndex: "9999",
                            backgroundColor: "rgba(255, 68, 68, 0.85)",
                        }}
                    >
                        {globalError}
                    </div>
                )}
            </div>
        ) : (
            <Preloader />
        );
    }
};
const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
    globalError: state.app.globalError,
});
let AppContainer = compose(
    connect(mapStateToProps, { initializeApp, globalErrorDispatch })(App)
);
let MainApp = (props) => {
    return (
        <BrowserRouter>
            <Provider store={props.store}>
                <AppContainer />
            </Provider>
        </BrowserRouter>
    );
};
export default MainApp;
