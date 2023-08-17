import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AppContextProvider } from "./components/AppContextProvider";
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // strictmode is for development
    <BrowserRouter>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </BrowserRouter>
);
