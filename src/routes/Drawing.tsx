import React from "react";
import { useParams } from "react-router-dom";

import drawings from "../assets/drawings.json";

import "./Drawing.css";

const Drawing = () => {
  let params = useParams();
  console.log(params);
  let drawing = drawings.find((d) => d.id == params.id);
  console.log(drawing);
  return (
    <>
      {drawing ? (
        <img
          className="drawing"
          src={drawing.url}
          alt={`Drawing #${drawing.id}`}
        />
      ) : (
        "Unknown drawing !"
      )}
    </>
  );
};

export default Drawing;