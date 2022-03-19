import { Link as DOMLink } from "react-router-dom";
import styled from "styled-components";

import { RouterLink } from "../common.styles";

let TopPanel = styled.div`
  width: 100%;
  padding: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

let MainTitle = styled(DOMLink)`
  padding: 5px;

  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
`;

let Title = styled.h1`
  margin: 0;
  font-size: 48px;
  font-family: "Sansita Swashed";
`;

let ThaiLettersWrapper = styled.div`
  width: 120px;

  font-family: "Pridi";
  font-size: 20px;
  line-height: 8px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

let LinksWrapper = styled.div`
  padding-top: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

let Link = styled(RouterLink)`
  padding: 0 2px;
`;

let LinkSeparator = styled.div`
  padding: 0 8px;

  display: flex;
  align-items: center;

  &:after {
    content: "";
    width: 2px;
    height: 2px;

    border-radius: 50%;
    background-color: var(--text);

    display: inline-block;
  }
`;

export default {
  TopPanel,
  MainTitle,
  Title,
  ThaiLettersWrapper,
  LinksWrapper,
  Link,
  LinkSeparator,
};
