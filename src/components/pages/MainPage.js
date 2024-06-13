import React from "react";
import { DisplayIssueHeader, DisplayIssueTable, TabPage } from "./IssuePage";
import { MainPage, MainTab, MainSection } from "../molecules/MainPagePart";

let isIssuePage = true;
let isPullRequestPage = false;

export default function BodySection() {
  function issuePageClick() {}
  function pullRequestPageClick() {}

  return (
    <>
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