import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import CommonStyles from "../common.styles";

import arts from "../assets/arts";
import ArtStyles from "./Art.styles";

const Art = () => {
  let params = useParams();
  let navigate = useNavigate();

  let art = arts.find((d) => d.id == params.id);

  let wrapperRef = useRef<HTMLDivElement | null>(null);
  let imageRef = useRef<HTMLImageElement | null>(null);

  let [loadState, setLoadState] = useState(false);

  useEffect(() => {
    if (imageRef.current) {
      imageRef.current.addEventListener("load", () => setLoadState(!loadState));
    }
  }, [imageRef.current]);

  useEffect(() => {
    if (wrapperRef.current?.offsetWidth && imageRef.current && art) {
      let width = wrapperRef.current.offsetWidth;
      imageRef.current.src = art.url
        .replace("cdn.discordapp.com", "media.discordapp.net")
        .concat(
          `?width=${width}&height=${Math.round(
            (width! * art.original.height) / art.original.width
          ).toFixed()}`
        );
    }
  }, [wrapperRef.current, imageRef.current, loadState]);

  return (
    <>
      <CommonStyles.FakeLink onClick={() => navigate(-1)}>
        Back
      </CommonStyles.FakeLink>
      {art ? (
        <>
          <ArtStyles.ArtWrapper ref={wrapperRef}>
            <ArtStyles.Image
              ref={imageRef}
              alt={`Drawing #${art.id}`}
              style={!loadState ? { filter: "blur(2px)" } : undefined}
            />
          </ArtStyles.ArtWrapper>
          <CommonStyles.Link href={art.url} target="_blank">
            See full image
          </CommonStyles.Link>
        </>
      ) : (
        "Unknown drawing !"
      )}
    </>
  );
};

export default Art;
