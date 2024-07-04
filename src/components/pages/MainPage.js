import IssueHeaderSection from "../organisms/IssueHeader";
import { TabSection } from "../organisms/TabSection";
import IssueTableSection from "../organisms/IssueTable";
import { MainBody, MainTab, MainSection } from "../molecules/MainPagePart";
import PullRequestPage from "./PullRequestPage";
import { useState } from "react";

export default function MainPage() {
  const [isIssuePage, setIsIssuePage] = useState(true);

  function issuePageClick() {
    setIsIssuePage(true);
  }
  function pullRequestPageClick() {
    setIsIssuePage(false);
  }
  return (
    <>
      <MainBody>
        <MainTab>
          <TabSection
            //修正中 Childrenについて調べる
            children={"Issue"}
            isActive={isIssuePage}
            tabClick={issuePageClick}
          />
          <TabSection
            //修正中 Childrenについて調べる
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
      </MainBody>
    </>
  );
}
