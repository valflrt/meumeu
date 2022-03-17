import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import { RouterLink } from "../common.styles";

import { IArtObject } from "../types";

import ArtThumbnailStyles from "./ArtThumbnail.styles";

const ArtThumbnail: FunctionComponent<{ art: IArtObject }> = ({ art }) => {
  let [placeHolderRef, setPlaceHolderRef] = useState<HTMLImageElement | null>();

  let [loading, setLoading] = useState(true);

  return (
    <ArtThumbnailStyles.Thumbnail key={art.id}>
      <RouterLink to={`/art/${art.id}`}>
        <ArtThumbnailStyles.ImageContainer>
          <ArtThumbnailStyles.Image
            alt={`Drawing #${art.id}`}
            ref={(ref) => setPlaceHolderRef(ref)}
            src={art.url
              .replace("cdn.discordapp.com", "media.discordapp.net")
              .concat(
                placeHolderRef
                  ? `?width=${placeHolderRef.offsetWidth}&height=${placeHolderRef.offsetWidth}`
                  : `?width=32&height=32`
              )}
            onLoad={() => setLoading(false)}
          />
          {loading ? (
            <ArtThumbnailStyles.Placeholder>
              <ArtThumbnailStyles.PlaceholderImage
                src={art.url
                  .replace("cdn.discordapp.com", "media.discordapp.net")
                  .concat(`?width=32&height=32`)}
              />
              <ArtThumbnailStyles.PlaceholderImageCache />
            </ArtThumbnailStyles.Placeholder>
          ) : null}
        </ArtThumbnailStyles.ImageContainer>
      </RouterLink>
    </ArtThumbnailStyles.Thumbnail>
  );
};

export default ArtThumbnail;
