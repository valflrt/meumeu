import styled from "styled-components";

import commonStyles from "../common.styles";

export let ArtWrapper = styled.div`
  width: 100%;
  padding: 6px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export let ImageWrapper = styled(commonStyles.Link)`
  width: 100%;
  height: 100%;
  position: relative;
`;

export let Image = styled.img`
  width: 100%;
  max-width: 800px;
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
  ArtWrapper,
  ImageWrapper,
  Image,
  Placeholder,
  PlaceholderImage,
  PlaceholderImageCache,
};
