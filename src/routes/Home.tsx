import React from "react";
import { Link } from "react-router-dom";

import drawings from "../assets/drawings.json";

import "./Home.css";

const Home = () => (
  <div>
    Home !
    <div className="grid">
      {drawings.map((d) => (
        <Link key={d.id} to={`/drawing/${d.id}`}>
          <img
            src={d.url
              .replace("cdn.discordapp.com", "media.discordapp.net")
              .concat(
                `?width=${Math.round(
                  (250 * d.original.width) / d.original.height
                ).toFixed()}&height=250`
              )}
            alt={`Drawing #${d.id}`}
          />
        </Link>
      ))}
    </div>
  </div>
);

export default Home;
