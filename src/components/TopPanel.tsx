import React from "react";

import TopPanelStyles from "./TopPanel.styles";

const TopPanel = () => (
  <TopPanelStyles.TopPanel>
    <TopPanelStyles.MainTitle to={"/"}>
      <TopPanelStyles.Title>meumeu.</TopPanelStyles.Title>
      <TopPanelStyles.ThaiLettersWrapper>
        <span>เ</span>
        <span>มิ</span>
        <span>อ</span>
        <span>ะ</span>
        <span>ๆ</span>
      </TopPanelStyles.ThaiLettersWrapper>
    </TopPanelStyles.MainTitle>
    <TopPanelStyles.LinksWrapper>
      <TopPanelStyles.Link to={"/"}>Home</TopPanelStyles.Link>
      <TopPanelStyles.LinkSeparator />
      <TopPanelStyles.Link to={"/arts"}>Arts</TopPanelStyles.Link>
      <TopPanelStyles.LinkSeparator></TopPanelStyles.LinkSeparator>
      <TopPanelStyles.Link to={"/about"}>About</TopPanelStyles.Link>
    </TopPanelStyles.LinksWrapper>
  </TopPanelStyles.TopPanel>
);

export default TopPanel;
