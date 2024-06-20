import React from "react";
import { IssueHeaderSection, TabPage } from "./IssuePage";
import IssueTableSection from "../organisms/IssueTableSection";
import { MainPage, MainTab, MainSection } from "../molecules/MainPagePart";
import PullRequestPage from "./PullRequestPage";
import { useState } from "react";

export default function BodySection() {
  const [isIssuePage, setIsIssuePage] = useState(true);

  function issuePageClick() {
    setIsIssuePage(true);
  }
  function pullRequestPageClick() {
    setIsIssuePage(false);
  }

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
            isActive={!isIssuePage}
            tabClick={pullRequestPageClick}
          />
        </MainTab>
        <MainSection>
          <IssueHeaderSection isIssueHeader={isIssuePage} />
          <IssueTableSection isIssuePage={isIssuePage} />
          <PullRequestPage isOpen={!isIssuePage} />
        </MainSection>
      </MainPage>
    </>
  );
}
