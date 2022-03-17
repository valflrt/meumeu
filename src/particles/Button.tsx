import React, { FunctionComponent, HTMLProps } from "react";
import { Link, LinkProps } from "react-router-dom";

import {
  StyledComponentProps,
  StyledInterface,
  StyledProps,
} from "styled-components";

import ButtonStyles from "./Button.styles";

const Button = (props: StyledProps<HTMLDivElement>) => (
  <ButtonStyles.ButtonWrapper>
    <ButtonStyles.Button {...props} />{" "}
    {/* contentEditable is fucking everything up */}
  </ButtonStyles.ButtonWrapper>
);

export const RouterButton: FunctionComponent<LinkProps> = (props) => (
  <ButtonWrapperStyle>
    <Link to={props.to}>
      <ButtonStyles.Button>{props.children}</ButtonStyles.Button>
    </Link>
  </ButtonWrapperStyle>
);

export default Button;
