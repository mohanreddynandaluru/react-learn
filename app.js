import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement(
  "h1",
  {
    id: "heading",
  },
  "this is from react"
);

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "this is h1")
//   )
// );

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "this is h1"),
    React.createElement("h2", {}, "this is h1 child 2"),
    React.createElement("h2", {}, "this is h1 child 3"),
    React.createElement("h2", {}, "this is h1 child 4"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
