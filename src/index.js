import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { ThemeProviderContext } from "./contexts/ThemeContext";
import Routes from "./routes/Routes";

ReactDOM.render(
  <ThemeProviderContext>
    <Routes />
  </ThemeProviderContext>,
  document.getElementById("root")
);
