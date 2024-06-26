import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ScrollReveal from "scrollreveal";
import "./index.css";

const sr = ScrollReveal({
  distance: "65px",
  duration: 2600,
  delay: 450,
  reset: true,
  origin: "top",
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App sr={sr} />
  </React.StrictMode>
);
