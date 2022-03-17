import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import { RouterLink } from "../common.styles";

import { IArtObject } from "../types";

import ArtThumbnailStyles from "./ArtThumbnail.styles";

const ArtThumbnail: FunctionComponent<{ art: IArtObject }> = ({ art }) => {
  let [imageRef, setImageRef] = useState<HTMLImageElement | null>();

  let [loading, setLoading] = useState(true);

  return (
    <ArtThumbnailStyles.Thumbnail key={art.id}>
      <RouterLink to={`/art/${art.id}`}>
        <ArtThumbnailStyles.ImageContainer>
          <ArtThumbnailStyles.Image
            alt={`Drawing #${art.id}`}
            ref={setImageRef}
            src={art.url
              .concat(
                imageRef
                  ? `?width=${imageRef.offsetWidth}&height=${imageRef.offsetWidth}`
                  : `?width=32&height=32`
              )}
            onLoad={() => setLoading(false)}
          />
          {loading ? (
            <ArtThumbnailStyles.Placeholder>
              <ArtThumbnailStyles.PlaceholderImage
                src={art.url
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
