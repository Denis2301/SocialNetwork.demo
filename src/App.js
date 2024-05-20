import "./App.css";
import { Header } from "./components/Header/Header";
import { Profile } from "./components/Profile/Profile";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Dialogs } from "./components/Dialogs/Dialogs";
import { News } from "./components/News/News";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Music } from "./components/Music/Music";
import { Settings } from "./components/Settings/Settings";

const App = () => {
    const [menuInd, menuChangeView] = useState(false);
    const handleMenuView = () => {
        menuChangeView(!menuInd);
    };

    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header handleMenuView={handleMenuView} menuInd={menuInd} />
                <Sidebar menuInd={menuInd} />
                <div className="wrapper-content">
                    <Routes>
                        <Route path="/profile/*" element={<Profile />} />
                        <Route path="/dialogs/*" element={<Dialogs />} />
                        <Route path="/news/*" element={<News />} />
                        <Route path="/music/*" element={<Music />} />
                        <Route path="/settings/*" element={<Settings />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
};
export default App;
