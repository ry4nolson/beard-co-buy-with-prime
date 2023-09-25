import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
const index = (await import("./css/index.css?raw")).default;

/* eslint-disable import/no-webpack-loader-syntax */
const root = ReactDOM.createRoot(document.getElementById("beard-prime")!);
root.render(
  <React.StrictMode>
    <style dangerouslySetInnerHTML={{ __html: index }} />
    <App />
  </React.StrictMode>
);
