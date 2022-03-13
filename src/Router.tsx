import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./routes/Home";
import Drawing from "./routes/Drawing";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/drawing/:id" element={<Drawing />} />
      <Route path="*" element={"There is nothing here !"} />
    </Routes>
  );
};

export default Router;
