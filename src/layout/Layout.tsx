import React, { FunctionComponent } from "react";
import { Instagram } from "react-feather";

import TopPanel from "../components/TopPanel";

import LayoutStyles from "./Layout.styles";

const Layout: FunctionComponent = ({ children }) => {
  return (
    <LayoutStyles.MainWrapper>
      <TopPanel />
      <LayoutStyles.ContentWrapper>{children}</LayoutStyles.ContentWrapper>
      <LayoutStyles.LinksWrapper>
        <a href={"https://www.instagram.com/meumeu.17/"} target={"_blank"}>
          <Instagram className={"icon"} size={28} />
        </a>
      </LayoutStyles.LinksWrapper>
    </LayoutStyles.MainWrapper>
  );
};

export default Layout;
