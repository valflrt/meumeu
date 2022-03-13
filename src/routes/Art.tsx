import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import drawings from "../assets/drawings.json";

import "./Art.css";

const Art = () => {
  let params = useParams();
  let navigate = useNavigate();

  let drawing = drawings.find((d) => d.id == params.id);

  let drawingRef = useRef<HTMLImageElement | null>(null);
  let [width, setWidth] = useState<number | undefined>(0);
  useEffect(() => {
    if (drawingRef.current?.offsetWidth && drawing) {
      setWidth(drawingRef.current.offsetWidth);

      drawingRef.current.src = drawing.url
        .replace("cdn.discordapp.com", "media.discordapp.net")
        .concat(
          `?width=${width}&height=${Math.round(
            (width! * drawing.original.height) / drawing.original.width
          ).toFixed()}`
        );

      drawingRef.current.addEventListener("load", () =>
        drawingRef.current?.classList.remove("loading")
      );
    }
  }, [drawingRef.current]);

  return (
    <>
      <span className="link" onClick={() => navigate(-1)}>
        Back
      </span>
      {drawing ? (
        <>
          <div className="drawing-wrapper">
            <img
              className="drawing loading"
              ref={drawingRef}
              alt={`Drawing #${drawing.id}`}
            />
            <div className="loader"> </div>
          </div>
          <a className="link" href={drawing.url} target="_blank">
            See full image
          </a>
        </>
      ) : (
        "Unknown drawing !"
      )}
    </>
  );
};

export default Art;
