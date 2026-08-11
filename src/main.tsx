import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./styles/tokens.css";
import "./styles/layout.css";
import "./styles/scene.css";
import "./styles/sections.css";
import "./styles/responsive.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Unable to start the portfolio: root element was not found.");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
