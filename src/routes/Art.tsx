import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import CommonStyles from "../common.styles";

import arts from "../assets/arts";
import ArtStyles from "./Art.styles";

const Art = () => {
  let params = useParams();
  let navigate = useNavigate();

  let art = arts.find((d) => d.id == params.id);

  let [imageRef, setImageRef] = useState<HTMLImageElement | null>();

  let [loading, setLoading] = useState(true);

  return (
    <>
      <CommonStyles.FakeLink onClick={() => navigate(-1)}>
        Back
      </CommonStyles.FakeLink>
      {art ? (
        <>
          <ArtStyles.ArtWrapper>
            <ArtStyles.ImageWrapper href={art.url} target="_blank">
              <ArtStyles.Image
                alt={`Drawing #${art.id}`}
                ref={setImageRef}
                src={art.url.concat(
                  imageRef
                    ? `?width=${imageRef.offsetWidth}&height=${Math.round(
                        (imageRef.offsetWidth * art.original.height) /
                          art.original.width
                      ).toFixed()}`
                    : `?width=${100}&height=${Math.round(
                        (100 * art.original.height) / art.original.width
                      ).toFixed()}`
                )}
                onLoad={() => setLoading(false)}
              />
              {loading ? (
                <ArtStyles.Placeholder>
                  <ArtStyles.PlaceholderImage
                    src={art.url.concat(
                      `?width=${100}&height=${Math.round(
                        (100 * art.original.height) / art.original.width
                      ).toFixed()}`
                    )}
                  />
                  <ArtStyles.PlaceholderImageCache />
                </ArtStyles.Placeholder>
              ) : null}
            </ArtStyles.ImageWrapper>
          </ArtStyles.ArtWrapper>
        </>
      ) : (
        "Unknown drawing !"
      )}
    </>
  );
};

export default Art;
