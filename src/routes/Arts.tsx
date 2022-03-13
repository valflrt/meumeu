import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import drawings from "../assets/drawings.json";

import "./Arts.css";

const Arts = () => {
  return (
    <div className="grid">
      {drawings.map((d) => (
        <div className="item" key={d.id}>
          <Link to={`/art/${d.id}`}>
            <img
              src={d.url
                .replace("cdn.discordapp.com", "media.discordapp.net")
                .concat(
                  `?width=${
                    250 /* Math.round(
                      (250 * d.original.width) / d.original.height
                    ).toFixed() */
                  }&height=250`
                )}
              alt={`Drawing #${d.id}`}
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Arts;
