import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import ReactTooltip from "react-tooltip";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ReactTooltip delayHide={1000}/>
    <App />
  </React.StrictMode>
);
