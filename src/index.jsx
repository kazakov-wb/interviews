import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components/App";

import "./styles/reset.css";
import "./styles/index.scss";

const node = document.getElementById("root");
ReactDOM.render(<App />, node);
