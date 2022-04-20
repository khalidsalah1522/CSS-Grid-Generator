import React from "react";
import reactDOM from "react-dom/client";
import App from "./App";
import "./assets/style/index.css";

const container = document.getElementById("app");
const root = reactDOM.createRoot(container);
root.render(<App />);
