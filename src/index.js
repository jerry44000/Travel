import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { UserContextProvider } from "./context/UserContext.js";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <HelmetProvider>
    <Router>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </Router>
  </HelmetProvider>,
  document.getElementById("root")
);
