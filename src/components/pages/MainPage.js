import styled from "styled-components";
import IssueSection from "../organisms/IssueSection";
import TabSection from "../organisms/TabSection";
import PullRequestPage from "./PullRequestPage";
import { useState } from "react";

const Body = styled.div`
  max-width: 896px;
  margin: 0px auto;
  padding: 32px 16px;
`;

const MainSection = styled.div`
  padding: 16px;
  margin-top: 16px;
`;

const Tab = styled.ul`
  display: flex;
`;

export default function MainPage() {
  const [isIssuePage, setIsIssuePage] = useState(true);
  function movePage(state) {
    if (state === "Issue") setIsIssuePage(true);
    else if (state === "Pull Request") setIsIssuePage(false);
  }
  return (
    <>
      <Body>
        <Tab>
          <TabSection isActive={isIssuePage} tabClick={() => movePage("Issue")}>
            Issue
          </TabSection>
          <TabSection
            isActive={!isIssuePage}
            tabClick={() => movePage("Pull Request")}
          >
            Pull Request
          </TabSection>
        </Tab>
        <MainSection>
          <IssueSection isOpen={isIssuePage} />
          <PullRequestPage isOpen={!isIssuePage} />
        </MainSection>
      </Body>
    </>
  );
}
