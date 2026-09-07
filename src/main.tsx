import React from "react";
import ReactDOM from "react-dom/client";
import { Analytics } from "@vercel/analytics/react";
import App from "./App";
import "./index.css";
import "./styles/tokens.css";
import "./styles/portfolio.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Unable to start the portfolio: root element was not found.");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
    <Analytics />
  </React.StrictMode>
);
