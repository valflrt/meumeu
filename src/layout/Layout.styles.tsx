import styled from "styled-components";

export let MainWrapper = styled.div`
  width: 100%;

  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow: hidden auto;
`;

export let ContentWrapper = styled.div`
  max-width: 500px;

  padding: 20px 0;

  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: center;

  @media screen and (max-width: 540px) {
    width: 100%;
  }
`;
