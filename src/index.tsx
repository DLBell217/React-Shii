import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import NavBar from "./navbar"

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <NavBar />
  </React.StrictMode>
);
