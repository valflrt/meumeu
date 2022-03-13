import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";

import "./Layout.css";

const Layout: FunctionComponent = ({ children }) => {
  return (
    <>
      <div className="main">
        <h1 className="main-title">
          <Link to={"/"}>meumeu.</Link>
        </h1>
        <div className="content-wrapper">{children}</div>
      </div>
    </>
  );
};

export default Layout;
