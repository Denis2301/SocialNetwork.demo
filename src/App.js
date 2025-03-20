import "./App.css";
import { News } from "./components/News/News";
import React, { useState, useEffect, lazy } from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import { Music } from "./components/Music/Music";
import { Settings } from "./components/Settings/Settings";
import { SidebarContainer } from "./components/Sidebar/SidebarContainer";
import UsersContainer from "./components/UsersContainer/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import { Provider, connect } from "react-redux";
import { initializeApp } from "./redux/appReducer";
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

const App = (props) => {
    const [menuInd, menuChangeView] = useState(false);
    const handleMenuView = () => {
        menuChangeView(!menuInd);
    };
    useEffect(() => {
        props.initializeApp();
    }, [props.initializeApp]);
    {
        return props.initialized ? (
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
                    </Routes>
                </div>
            </div>
        ) : (
            <Preloader />
        );
    }
};
const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
});
let AppContainer = compose(connect(mapStateToProps, { initializeApp })(App));
let MainApp = (props) => {
    return (
        <BrowserRouter basename="/SocialNetwork.demo">
            <Provider store={props.store}>
                <AppContainer />
            </Provider>
        </BrowserRouter>
    );
};
export default MainApp;
