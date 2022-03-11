import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";

import "./Layout.css";

const Layout: FunctionComponent = ({ children }) => {
  return (
    <>
      <Link to={"/"}>
        <h1 className="main-title">
          meumeu<span className="dot">.</span>
        </h1>
      </Link>
      <div className="card-wrapper">
        <div className="card">
          <div className="content-wrapper">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
