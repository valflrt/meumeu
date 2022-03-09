import React from "react";
import ReactDOM from "react-dom";

import Layout from "./components/Layout";

import Router from "./Router";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Layout>
      <Router />
    </Layout>
  </React.StrictMode>,
  document.getElementById("root")
);
