import "./App.css";
import { Header } from "./components/Header/Header";
import { Profile } from "./components/Profile/Profile";
import { News } from "./components/News/News";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Music } from "./components/Music/Music";
import { Settings } from "./components/Settings/Settings";
import { DialogsContainer } from "./components/Dialogs/DialogsContainer";
import { SidebarContainer } from "./components/Sidebar/SidebarContainer";

const App = () => {
    const [menuInd, menuChangeView] = useState(false);
    const handleMenuView = () => {
        menuChangeView(!menuInd);
    };

    return (
        <div className="wrapper">
            <Header handleMenuView={handleMenuView} menuInd={menuInd} />
            <SidebarContainer
                handleMenuView={handleMenuView}
                menuInd={menuInd}
            />
            <div className="wrapper-content">
                <Routes>
                    <Route path="/" element={<Navigate to="/profile" />} />
                    <Route
                        path="/profile/*"
                        element={<Profile />}
                    />
                    <Route
                        path="/dialogs/*"
                        element={<DialogsContainer />}
                    />
                    <Route path="/news/*" element={<News />} />
                    <Route path="/music/*" element={<Music />} />
                    <Route path="/settings/*" element={<Settings />} />
                </Routes>
            </div>
        </div>
    );
};
export default App;
