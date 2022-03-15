import { Link } from "react-router-dom";
import styled from "styled-components";

import { RouterLinkStyle } from "../common.styles";

export let TopPanelStyle = styled.div`
  width: 100%;
  padding: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export let MainTitleStyle = styled(Link)`
  padding: 5px;

  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
`;

export let TitleStyle = styled.h1`
  margin: 0;
  font-size: 48px;
  font-family: "Sansita Swashed";
`;

export let ThaiDivStyle = styled.div`
  width: 120px;

  font-family: "Pridi";
  font-size: 20px;
  line-height: 8px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export let LinksDivStyle = styled.div`
  padding-top: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export let TopPanelLinkStyle = styled(RouterLinkStyle)`
  padding: 0 4px;
`;
