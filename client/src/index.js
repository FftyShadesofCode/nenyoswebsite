import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "../src/CSS Files/index.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/css/bootstrap-reboot.min.css";

// import 'jquery/dist/jquery.min'
import "popper.js/dist/popper.min";
import "bootstrap/dist/js/bootstrap.min";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
