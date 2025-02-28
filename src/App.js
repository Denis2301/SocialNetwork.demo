import "./App.css";
import ProfileContainer from "./components/Profile/ProfileContainer";
import { News } from "./components/News/News";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Music } from "./components/Music/Music";
import { Settings } from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import { SidebarContainer } from "./components/Sidebar/SidebarContainer";
import UsersContainer from "./components/UsersContainer/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import { connect } from "react-redux";
import { initializeApp } from "./redux/appReducer";
import { compose } from "redux";
import { Preloader } from "./components/common/Preloader/Preloader";
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
                            element={<ProfileContainer />}
                        />
                        <Route
                            path="/dialogs/*"
                            element={<DialogsContainer />}
                        />
                        <Route path="/users/*" element={<UsersContainer />} />
                        <Route path="/news/*" element={<News />} />
                        <Route path="/music/*" element={<Music />} />
                        <Route path="/settings/*" element={<Settings />} />
                        <Route path="/login*" element={<LoginPage />} />
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
export default compose(connect(mapStateToProps, { initializeApp })(App));
