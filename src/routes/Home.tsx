import React from "react";

import { RouterLink } from "../common.styles";

const Home = () => {
  return (
    <>
      <p>
        Wanna <RouterLink to={"/about"}>learn more</RouterLink> about my work :)
        ?
      </p>
    </>
  );
};

export default Home;
