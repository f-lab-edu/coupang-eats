import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import "./index.css";
import initMocks from "./mocks";

if (import.meta.env.DEV) initMocks();
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
