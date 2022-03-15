import React from "react";
import { Link } from "react-router-dom";

import {
  LinksDivStyle,
  TitleStyle,
  ThaiDivStyle,
  TopPanelStyle,
  MainTitleStyle,
  TopPanelLinkStyle,
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
      <TopPanelLinkStyle to={"/"}>Home</TopPanelLinkStyle>
      <TopPanelLinkStyle to={"/arts"}>Arts</TopPanelLinkStyle>
      <TopPanelLinkStyle to={"/about"}>About</TopPanelLinkStyle>
      <TopPanelLinkStyle to={"/contact"}>Contact</TopPanelLinkStyle>
    </LinksDivStyle>
  </TopPanelStyle>
);

export default TopPanel;
