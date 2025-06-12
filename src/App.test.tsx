import { createRoot } from "react-dom/client";
import MainApp from "./App";
import React from "react";
import store from "./redux/redux-store";

it("renders without crashing", () => {
    const div = document.createElement("div");
    const root = createRoot(div);
    root.render(<MainApp store={store}/>);
    root.unmount();
});
