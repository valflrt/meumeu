import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./routes/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<div>router test success !</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
