import "./App.css";
import { Header } from "./components/Header/Header";
import { Profile } from "./components/Profile/Profile";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Dialogs } from "./components/Dialogs/Dialogs";
import { useState } from "react";

const App = (props) => {
    const [menuInd, menuChangeView] = useState(false);
    const handleMenuView = () => {
        menuChangeView(!menuInd);
    };
    return (
        <div className="wrapper">
            <Header handleMenuView={handleMenuView} menuInd={menuInd} />
            <Sidebar menuInd={menuInd} />
            <div className="wrapper-content">
                <Dialogs />
                {/* <Profile /> */}
            </div>
        </div>
    );
};
export default App;
