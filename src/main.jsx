import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter as Router} from "react-router-dom";

import "./index.css";
import {App} from "./App.jsx";
import {NextUIProvider} from "@nextui-org/react";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Router>
            <NextUIProvider>
                <App/>
            </NextUIProvider>
        </Router>
    </React.StrictMode>
);
