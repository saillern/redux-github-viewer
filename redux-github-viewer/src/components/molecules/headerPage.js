import React from "react";
import { HeaderTitle, HeaderListText } from "../organisms/Header";
import styled from "styled-components";

const HeaderFormat = styled.div`
  display: flex;
  padding: 16px;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  background: rgb(51, 51, 51);
  color: white;
`;

const HeaderListFormat = styled.div`
  display: flex;
  width: 100%;
  padding: 0px 32px;
`;

const HeaderList = styled(HeaderListText)`
  padding-right: 16px;
`;

export default function HeaderSection() {
  return (
    <HeaderFormat>
      <HeaderTitle>GitHub Viewer</HeaderTitle>
      <HeaderListFormat>
        <HeaderList>Issue</HeaderList>
        <HeaderList>Pull Request</HeaderList>
      </HeaderListFormat>
    </HeaderFormat>
  );
}
