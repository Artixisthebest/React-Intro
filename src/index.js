import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Title from "./App";
import { Creeds } from "./App";
import reportWebVitals from "./reportWebVitals";
import { Descriptions } from "./App";
import { Sonic } from "./App";
import { Buttons } from "./App";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Title />
    <Creeds></Creeds>
    <Descriptions></Descriptions>
    <Sonic></Sonic>
    <Buttons></Buttons>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
