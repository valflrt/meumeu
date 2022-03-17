import React, { FunctionComponent } from "react";

import TopPanel from "../components/TopPanel";

import { ContentWrapper, MainWrapper } from "./Layout.styles";

const Layout: FunctionComponent = ({ children }) => {
  return (
    <MainWrapper>
      <TopPanel />
      <ContentWrapper>{children}</ContentWrapper>
    </MainWrapper>
  );
};

export default Layout;
