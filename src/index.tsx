import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import Layout from "./components/Layout";

import Router from "./Router";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Layout>
        <Router />
      </Layout>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
