import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AppContextProvider } from "./components/AppContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // strictmode is for development
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>
);
