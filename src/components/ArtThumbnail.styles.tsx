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
  height: auto;
  border-radius: 8px;
`;

export let ImageCover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  backdrop-filter: blur(20px);
  border-radius: 8px;
`;

export default {
  Thumbnail,
  ImageContainer,
  Image,
};
