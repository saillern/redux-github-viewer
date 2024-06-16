import React from "react";
import { DisplayIssueHeader, DisplayIssueTable, TabPage } from "./IssuePage";
import { MainPage, MainTab, MainSection } from "../molecules/MainPagePart";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;  
  }
  html{
    font-family: Lato, "Lucida Grande", "Lucida Sans Unicode", Tahoma, sans-serif;
    line-height: 1.5;
    font-size: 14px;
    padding: 0px;
    margin: 0;
  }
  a{
    color: rgb(3,102,214);
    text-decration:none;
  }

  *,*:before,*:after {
    box-sizing: border-box;
  }
  li{
    list-style-type:none;
  }
  ul{
    padding:0px;
    margin:0px;
  }
`;

let isIssuePage = true;
let isPullRequestPage = false;

export default function BodySection() {
  function issuePageClick() {}
  function pullRequestPageClick() {}

  return (
    <>
      <GlobalStyle />
      <MainPage>
        <MainTab>
          <TabPage
            name={"Issue"}
            isActive={isIssuePage}
            tabClick={issuePageClick}
          />
          <TabPage
            name={"Pull Request"}
            isActive={isPullRequestPage}
            tabClick={pullRequestPageClick}
          />
        </MainTab>
        <MainSection>
          <DisplayIssueHeader isIssueHeader={isIssuePage} />
          <DisplayIssueTable isIssuePage={isIssuePage} />
        </MainSection>
      </MainPage>
    </>
  );
}
