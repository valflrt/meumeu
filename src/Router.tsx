import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Arts from "./routes/Arts";
import Art from "./routes/Art";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/arts/" element={<Arts />} />
      <Route path="/art/:id" element={<Art />} />
      <Route path="*" element={"There is nothing here !"} />
    </Routes>
  );
};

export default Router;
