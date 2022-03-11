import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./routes/Home";
import Drawing from "./routes/Drawing";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/drawing/:id" element={<Drawing />} />
    </Routes>
  );
};

export default Router;
