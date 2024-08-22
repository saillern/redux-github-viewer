import IssueHeaderSection from "../organisms/IssueHeader";
import { TabSection } from "../organisms/TabSection";
import IssueTableSection from "../organisms/IssueTable";
import { MainBody, MainTab, MainSection } from "../molecules/MainPagePart";
import PullRequestPage from "./PullRequestPage";
import { useState } from "react";

export default function MainPage() {
  const [isIssuePage, setIsIssuePage] = useState(true);

  //TODO:一つにまとめられないか考える
  //
  function issuePageClick() {
    setIsIssuePage(true);
  }
  function pullRequestPageClick() {
    setIsIssuePage(false);
  }
  //
  return (
    <>
      <MainBody>
        <MainTab>
          <TabSection isActive={isIssuePage} tabClick={issuePageClick}>
            Issue
          </TabSection>
          <TabSection isActive={!isIssuePage} tabClick={pullRequestPageClick}>
            Pull Request
          </TabSection>
        </MainTab>
        <MainSection>
          <IssueHeaderSection isIssueHeader={isIssuePage} />
          <IssueTableSection isIssuePage={isIssuePage} />
          <PullRequestPage isOpen={!isIssuePage} />
        </MainSection>
      </MainBody>
    </>
  );
}
