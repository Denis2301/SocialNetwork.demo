import { createRoot } from "react-dom/client";
import MainApp from "./App";
import React from "react";

it("renders without crashing", () => {
    const div = document.createElement("div");
    const root = createRoot(div);
    root.render(<MainApp />);
    root.unmount();
});
