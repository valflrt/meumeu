import styled from "styled-components";

import ArtThumbnailStyles from "../components/ArtThumbnail.styles";

let Grid = styled.div`
  width: 100%;

  display: flex;
  flex-flow: row wrap;
  justify-content: center;

  gap: 6px;

  ${ArtThumbnailStyles.Thumbnail} {
    width: 160px;
    height: 160px;
  }

  @media screen and (max-width: 500px) {
    ${ArtThumbnailStyles.Thumbnail} {
      width: 120px;
      height: 120px;
    }
  }

  @media screen and (min-width: 1200px) {
    ${ArtThumbnailStyles.Thumbnail} {
      width: 220px;
      height: 220px;
    }
  }
`;

export default {
  Grid,
};
