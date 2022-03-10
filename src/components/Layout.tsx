import React, { FunctionComponent } from "react";

import "./Layout.css";

const Layout: FunctionComponent = ({ children }) => {
  return (
    <>
      <h1>
        meumeu<span className="dot">.</span>
      </h1>
      <div className="card-wrapper">
        <div className="card">{children}</div>
      </div>
    </>
  );
};

export default Layout;
