import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./routes/Home";
import Arts from "./routes/Arts";
import Drawing from "./routes/Drawing";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/arts/" element={<Arts />} />
      <Route path="/art/:id" element={<Drawing />} />
      <Route path="*" element={"There is nothing here !"} />
    </Routes>
  );
};

export default Router;
