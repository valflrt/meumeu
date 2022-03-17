import styled from "styled-components";

export let MainWrapper = styled.div`
  width: 100%;

  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow-y: auto;
`;

export let ContentWrapper = styled.div`
  width: 500px;

  padding: 20px 0;

  @media screen and (max-width: 540px) {
    width: 100%;
  }
`;
