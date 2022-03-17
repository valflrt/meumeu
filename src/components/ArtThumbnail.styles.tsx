import styled from "styled-components";

import { RouterLink } from "../common.styles";

export let Thumbnail = styled.div`
  width: 49%;
  cursor: pointer;

  ${RouterLink} {
    width: 100%;
    height: 100%;
  }
`;

export let ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export let Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;

export let Placeholder = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  position: absolute;
`;

export let PlaceholderImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;

export let PlaceholderImageCache = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  border-radius: 8px;
  backdrop-filter: blur(5px);

  position: absolute;
`;

export default {
  Thumbnail,
  ImageContainer,
  Image,
  Placeholder,
  PlaceholderImage,
  PlaceholderImageCache,
};
