import React from "react";
import { Link } from "react-router-dom";
import {
  LinksDivStyle,
  LinkStyle,
  TitleStyle,
  ThaiDivStyle,
  TopPanelStyle,
  MainTitleStyle,
} from "./TopPanelStyles";

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
      <LinkStyle to={"/"}>Home</LinkStyle>
      <LinkStyle to={"/arts"}>Arts</LinkStyle>
      <LinkStyle to={"/about"}>About</LinkStyle>
      <LinkStyle to={"/contact"}>Contact</LinkStyle>
    </LinksDivStyle>
  </TopPanelStyle>
);

export default TopPanel;
