import React from "react";
import { Link } from "react-router-dom";

import "./TopPanel.css";

const TopPanel = () => (
  <div className="top-panel">
    <h1 className="main-title">
      <Link to={"/"}>meumeu.</Link>
    </h1>
    <div className="links">
      <Link className="link" to={"/"}>
        Home
      </Link>
      <Link className="link" to={"/arts"}>
        Arts
      </Link>
      <Link className="link" to={"/about"}>
        About
      </Link>
      <Link className="link" to={"/contact"}>
        Contact
      </Link>
    </div>
  </div>
);

export default TopPanel;
