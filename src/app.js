import React from "react";
import ReactDOM from "react-dom/client";
import { Heading } from "./Components/Heading";
import { Body } from "./Components/Body";

const App = () => {
    return <div>
        <Heading />
        <Body />
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);