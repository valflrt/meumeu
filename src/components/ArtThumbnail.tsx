import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import { RouterLink } from "../common.styles";

import { IArtObject } from "../types";

import ArtThumbnailStyles, { ImageCover } from "./ArtThumbnail.styles";

const ArtThumbnail: FunctionComponent<{ art: IArtObject }> = ({ art }) => {
  let containerRef = useRef<HTMLDivElement | null>(null);
  let imageRef = useRef<HTMLImageElement | null>(null);

  let [loading, setLoading] = useState(true);

  useEffect(() => {
    if (containerRef.current?.offsetWidth && imageRef.current) {
      let sideLength = containerRef.current.offsetWidth;
      imageRef.current.src = art.url
        .replace("cdn.discordapp.com", "media.discordapp.net")
        .concat(`?width=${sideLength}&height=${sideLength}`);
    }
  }, [containerRef.current, imageRef.current]);

  return (
    <ArtThumbnailStyles.Thumbnail key={art.id}>
      <RouterLink to={`/art/${art.id}`}>
        <ArtThumbnailStyles.ImageContainer ref={containerRef}>
          <ArtThumbnailStyles.Image
            alt={`Drawing #${art.id}`}
            ref={imageRef}
            src={art.url
              .replace("cdn.discordapp.com", "media.discordapp.net")
              .concat(`?width=32&height=32`)}
            onLoad={() => setLoading(false)}
            onLoadStart={() => setLoading(true)}
          />
          {loading ? <ImageCover /> : null}
        </ArtThumbnailStyles.ImageContainer>
      </RouterLink>
    </ArtThumbnailStyles.Thumbnail>
  );
};

export default ArtThumbnail;
