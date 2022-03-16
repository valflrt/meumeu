import React, { FunctionComponent, MouseEventHandler } from "react";

import {
  TextButtonStyle,
  ButtonWrapperStyle,
  RouterLinkButtonStyle,
} from "./Button.styles";

interface IButtonProps {
  label: string;
  action: string | MouseEventHandler<HTMLParagraphElement>;
}

const Button: FunctionComponent<IButtonProps> = (props) => (
  <ButtonWrapperStyle>
    {typeof props.action === "string" ? (
      <RouterLinkButtonStyle to={props.action}>
        {props.label}
      </RouterLinkButtonStyle>
    ) : (
      <TextButtonStyle onClick={props.action}>{props.label}</TextButtonStyle>
    )}
  </ButtonWrapperStyle>
);

export default Button;
