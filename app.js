import React from "react";
import ReactDOM from "react-dom/client"
/* {
  /* <div id="parent">
  <div id="child">
    <h1>Hello world from react</h1>
    <h2>This is h2 tag</h2>
  </div>
  <div id="child2">
    <h1>Hello world from react</h1>
    <h2>This is h2 tag</h2>
  </div>
</div>; 
} */

const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child",key:"1" }, [
    React.createElement("h1", {key:"a"}, "Hello world from react"),
    React.createElement("h2", {key:"b"}, "This is h2 tag"),
  ]),
  React.createElement("div", { id: "child2",key:"2" }, [
    React.createElement("h1", {key:"c"}, "Hello world from react"),
    React.createElement("h2", {key:"d"}, "This is h2 tag"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading)
