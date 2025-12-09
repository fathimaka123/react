import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import resLi from "./utils/mockdata.js";

const App = () => {
  return (
    <div>
      <Header />
      <Body resLi={resLi} />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);