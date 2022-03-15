import styled from "styled-components";
import { Feather } from "react-feather";
import { Link } from "react-router-dom";

export let ButtonWrapperStyle = styled.span`
  padding: 5px;
`;

export let ButtonStyle = styled.div`
  min-width: 80px;
  height: 40px;

  padding: 5px 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export let RouterLinkButtonStyle = styled(Link)`
  min-width: 80px;
  height: 40px;

  padding: 5px 0;

  text-decoration: none;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export let LinkButtonStyle = styled.a`
  min-width: 80px;
  height: 40px;

  padding: 5px 0;

  text-decoration: none;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export let TextButtonStyle = styled.p`
  display: inline;
`;

export let ButtonIconStyle = styled(Feather)`
  display: inline;
`;
