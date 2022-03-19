import * as feather from "react-feather";
import styled from "styled-components";

let MainWrapper = styled.div`
  width: 100%;
  height: 100%;

  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow: hidden auto;
`;

let ContentWrapper = styled.div`
  width: 100%;
  max-width: 500px;

  padding: 20px 0;

  flex-grow: 1;

  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: flex-start;

  @media screen and (max-width: 540px) {
    width: 100%;
  }

  @media screen and (min-width: 1200px) {
    max-width: 800px;
  }
`;

let LinksWrapper = styled.div`
  padding: 10px 0;

  display: flex;
  align-items: center;
  justify-content: center;

  .icon {
    color: var(--text);
    transition: 200ms;
    &:hover {
      transform: scale(1.1);
    }
  }
`;

export default {
  MainWrapper,
  ContentWrapper,
  LinksWrapper,
};
