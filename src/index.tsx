import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";

import Layout from "./layout/Layout";

import Router from "./Router";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Layout>
        <Router />
      </Layout>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
