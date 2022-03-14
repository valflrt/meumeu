import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";

const Home = () => {
  return (
    <>
      <p>
        Wanna{" "}
        <Link className="link" to="/about">
          learn more
        </Link>{" "}
        about me :) ?
      </p>
    </>
  );
};

export default Home;
