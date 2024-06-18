import React from "react";
import { IssueHeaderSection, TabPage } from "./IssuePage";
import IssueTableSection from "../organisms/IssueTableSection";
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
            children={"Issue"}
            isActive={isIssuePage}
            tabClick={issuePageClick}
          />
          <TabPage
            children={"Pull Request"}
            isActive={isPullRequestPage}
            tabClick={pullRequestPageClick}
          />
        </MainTab>
        <MainSection>
          <IssueHeaderSection isIssueHeader={isIssuePage} />
          <IssueTableSection isIssuePage={isIssuePage} />
        </MainSection>
      </MainPage>
    </>
  );
}
