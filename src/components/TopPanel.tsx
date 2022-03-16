import React from "react";

import Button from "../particles/Button";

import {
  LinksDivStyle,
  TitleStyle,
  ThaiDivStyle,
  TopPanelStyle,
  MainTitleStyle,
} from "./TopPanel.styles";

const TopPanel = () => (
  <TopPanelStyle>
    <MainTitleStyle to={"/"}>
      <TitleStyle>meumeu.</TitleStyle>
      <ThaiDivStyle>
        <span>เ</span>
        <span>มิ</span>
        <span>อ</span>
        <span>ะ</span>
        <span>ๆ</span>
      </ThaiDivStyle>
    </MainTitleStyle>
    <LinksDivStyle>
      <Button action={"/"} label={"Home"} />
      <Button action={"/arts"} label={"Arts"} />
      <Button action={"/about"} label={"About"} />
      <Button action={"/contact"} label={"Contact"} />
    </LinksDivStyle>
  </TopPanelStyle>
);

export default TopPanel;
