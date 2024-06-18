import React from "react";
import styled from "styled-components";
import { InputText } from "../atoms/Text";
import { PrimaryButton, WarningButton } from "../atoms/Button";
import { MainPage, MainSection } from "../molecules/MainPagePart";
import HeaderSection from "../organisms/HeaderSection";
import IssueTableSection from "../organisms/IssueTableSection";

const TabCard = styled.li`
  li {
    padding: 0px;
  }
  font-size: 1.2rem;
  width: 100%;
  text-align: center;
  border-radius: 6px 6px 0px 0px;
  border-top: ${(props) =>
    props.$isActive ? "1px solid rgb(225, 228, 232)" : "0px"};
  border-left: ${(props) =>
    props.$isActive ? "1px solid rgb(225, 228, 232)" : "0px"};
  border-right: ${(props) =>
    props.$isActive ? "1px solid rgb(225, 228, 232)" : "0px"};
  border-bottom: ${(props) =>
    !props.$isActive ? "1px solid rgb(225, 228, 232)" : "0px"};
`;

const TabCardText = styled.span`
  cursor: pointer;
  color: rgb(88, 96, 105);
  padding: 16px;
  display: block;
  width: 100%;
`;

const MainHeader = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
`;

const InputWindow = styled(InputText)`
  border-radius: 6px;
  border: 1px solid rgb(225, 228, 232);
`;

const InputForm = styled.div`
  padding: 8px 16px;
  display: flex;
  width: 100%;
`;

const MainHeaderBtn = styled.div`
  display: flex;
`;
export const tabPages = {
  issue: "Issue",
  pullRequest: "Pull Request",
};

export function TabPage({ children, isActive, tabClick }) {
  return (
    <TabCard $isActive={isActive} onClick={tabClick}>
      <TabCardText>{children}</TabCardText>
    </TabCard>
  );
}

export function DisplayIssueHeader({ isIssueHeader }) {
  if (isIssueHeader) {
    return (
      <MainHeader>
        <h2>Issue</h2>
        <InputForm>
          <InputWindow type="input" placeholder="issue名で検索"></InputWindow>
        </InputForm>
        <MainHeaderBtn>
          <PrimaryButton>New</PrimaryButton>
          <WarningButton>Delete </WarningButton>
        </MainHeaderBtn>
      </MainHeader>
    );
  }
}

let isIssuePage = true;
export default function IssuePage() {
  return (
    <>
      <HeaderSection />
      <MainPage>
        <MainSection>
          <DisplayIssueHeader isIssueHeader={isIssuePage} />
          <IssueTableSection isIssuePage={isIssuePage} />
        </MainSection>
      </MainPage>
    </>
  );
}
