import React from "react";
import { Link as DomLink } from "react-router-dom";
import styled from "styled-components";

export let Link = styled.a`
  text-decoration: underline;
  cursor: pointer;
`;

export let RouterLink = styled(DomLink)`
  text-decoration: underline;
  cursor: pointer;
`;

export let FakeLink = styled.span`
  text-decoration: underline;
  cursor: pointer;
`;

export default {
  Link,
  RouterLink,
  FakeLink,
};
