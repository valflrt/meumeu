import React from "react";
import { Link, useParams } from "react-router-dom";

import drawings from "../assets/drawings.json";

import "./Drawing.css";

const Drawing = () => {
  let params = useParams();
  console.log(params);
  let drawing = drawings.find((d) => d.id == params.id);
  console.log(drawing);
  return (
    <>
      <Link className="link" to={"/"}>
        Back
      </Link>
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
