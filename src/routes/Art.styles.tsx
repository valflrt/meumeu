import styled from "styled-components";

export let ArtWrapper = styled.div`
  width: 100%;
  padding: 6px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export let Image = styled.img`
  width: 100%;
  max-width: 800px;
  border-radius: 8px;
`;

export default {
  ArtWrapper,
  Image,
};
