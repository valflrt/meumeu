import React, { FunctionComponent } from "react";

import TopPanel from "./TopPanel";

import "./Layout.css";

const Layout: FunctionComponent = ({ children }) => {
  return (
    <div className="main">
      <TopPanel />
      <div className="content-wrapper">{children}</div>
    </div>
  );
};

export default Layout;
