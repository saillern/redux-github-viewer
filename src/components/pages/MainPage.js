import styled from "styled-components";
import IssueHeaderSection from "../organisms/IssueHeader";
import { TabSection } from "../organisms/TabSection";
import IssueTableSection from "../organisms/IssueTable";
import PullRequestPage from "./PullRequestPage";
import { useState } from "react";

const Body = styled.div`
  max-width: 896px;
  margin: 0px auto;
  padding: 32px 16px;
`;

const Tab = styled.ul`
  display: flex;
`;

const MainSection = styled.div`
  padding: 16px;
  margin-top: 16px;
`;
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
      <Body>
        <Tab>
          <TabSection isActive={isIssuePage} tabClick={issuePageClick}>
            Issue
          </TabSection>
          <TabSection isActive={!isIssuePage} tabClick={pullRequestPageClick}>
            Pull Request
          </TabSection>
        </Tab>
        <MainSection>
          <IssueHeaderSection isIssueHeader={isIssuePage} />
          <IssueTableSection isIssuePage={isIssuePage} />
          <PullRequestPage isOpen={!isIssuePage} />
        </MainSection>
      </Body>
    </>
  );
}
