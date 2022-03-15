import React from "react";

import Button from "../particles/Button";

import { RouterLinkStyle } from "../common.styles";

const Home = () => {
  return (
    <>
      <p>
        Wanna <RouterLinkStyle to="/about">learn more</RouterLinkStyle> about me
        :) ?
      </p>
    </>
  );
};

export default Home;
