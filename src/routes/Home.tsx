import React from "react";

import Button from "../particles/Button";

import { RouterLink } from "../common.styles";

const Home = () => {
  return (
    <>
      <p>
        Wanna <RouterLink to="/about">learn more</RouterLink> about me :) ?
      </p>
    </>
  );
};

export default Home;
