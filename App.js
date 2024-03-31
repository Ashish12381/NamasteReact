import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" ,
className:'header'},
  "Hello from react"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

