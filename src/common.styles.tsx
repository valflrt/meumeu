import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export let LinkStyle = styled.a`
  text-decoration: underline;
  cursor: pointer;
`;

export let RouterLinkStyle = styled(Link)`
  text-decoration: underline;
  cursor: pointer;
`;
