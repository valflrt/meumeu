import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";

import drawings from "../assets/drawings.json";

import "./Drawing.css";

const Drawing = () => {
  let params = useParams();

  let drawingRef = useRef<HTMLImageElement | null>(null);
  let [width, setWidth] = useState<number | undefined>(0);
  useEffect(() => {
    setWidth(drawingRef.current ? drawingRef.current.offsetWidth : undefined);
  }, [drawingRef.current]);

  let drawing = drawings.find((d) => d.id == params.id);

  return (
    <>
      <Link className="link" to={"/"}>
        Back
      </Link>
      {drawing ? (
        <>
          <div className="drawing-wrapper" id="drawing-wrapper">
            <img
              className="drawing"
              ref={drawingRef}
              src={
                width
                  ? drawing.url
                      .replace("cdn.discordapp.com", "media.discordapp.net")
                      .concat(
                        `?width=${width}&height=${Math.round(
                          (width * drawing.original.height) /
                            drawing.original.width
                        ).toFixed()}`
                      )
                  : drawing.url
              }
              alt={`Drawing #${drawing.id}`}
            />
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

export default Drawing;
