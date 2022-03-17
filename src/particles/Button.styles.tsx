import styled from "styled-components";
import { Feather } from "react-feather";
import { Link } from "react-router-dom";

let ButtonWrapper = styled.span`
  padding: 5px;
`;

let Button = styled.div`
  min-width: 80px;
  height: 40px;

  padding: 20px 0;
  border-radius: 20px;

  background-color: #ffebf77f;

  text-decoration: none;

  display: flex;
  align-items: center;
  justify-content: center;
`;

let RouterLinkButton = styled(Link)`
  min-width: 80px;
  height: 40px;

  padding: 20px 0;
  border-radius: 20px;

  background-color: #ffebf77f;

  text-decoration: none;

  display: flex;
  align-items: center;
  justify-content: center;
`;

let LinkButton = styled.a`
  min-width: 80px;
  height: 40px;

  padding: 5px 0;

  text-decoration: none;

  display: flex;
  align-items: center;
  justify-content: center;
`;

let ButtonIcon = styled(Feather)`
  display: inline;
`;

export default {
  ButtonWrapper,
  Button,
  RouterLinkButton,
  LinkButton,
  ButtonIcon,
};
