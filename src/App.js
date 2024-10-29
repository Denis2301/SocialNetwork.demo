import "./App.css";
import { Header } from "./components/Header/Header";
import { Profile } from "./components/Profile/Profile";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Dialogs } from "./components/Dialogs/Dialogs";
import { News } from "./components/News/News";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Music } from "./components/Music/Music";
import { Settings } from "./components/Settings/Settings";

const App = (props) => {
    const [menuInd, menuChangeView] = useState(false);
    const handleMenuView = () => {
        menuChangeView(!menuInd);
    };

    return (
        <div className="wrapper">
            <Header handleMenuView={handleMenuView} menuInd={menuInd} />
            <Sidebar
                handleMenuView={handleMenuView}
                store={props.store}
                menuInd={menuInd}
                dispatch={props.dispatch}
            />
            <div className="wrapper-content">
                <Routes>
                    <Route path="/" element={<Navigate to="/profile" />} />
                    <Route
                        path="/profile/*"
                        element={
                            <Profile
                                store={props.store}
                                dispatch={props.dispatch}
                            />
                        }
                    />
                    <Route
                        path="/dialogs/*"
                        element={
                            <Dialogs
                                store={props.store}
                                dispatch={props.dispatch}
                            />
                        }
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
