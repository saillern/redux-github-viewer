import React from "react";
import styled from "styled-components";
import { InputText } from "../atoms/Text";
import { Button } from "../atoms/Button";
import { MainPage, MainSection } from "../molecules/MainPagePart";
import HeaderSection from "../organisms/HeaderSection";
import { GlobalStyle } from "../../App";

const TopButton = styled(Button)`
  padding: 4px 16px;
  margin: 4px;
  min-width: 100px;
  font-size: 1rem;
  border-radius: 6px;
`;

const PrimaryButton = styled(TopButton)`
  color: white;
  background: rgb(66, 195, 96);
  border-bottom: 2px solid rgb(40, 167, 69);
  &:hover {
    background: rgb(40, 167, 69);
    border-bottom: 2px solid rgb(32, 132, 55);
  }
`;

const WarningButton = styled(TopButton)`
  color: white;
  background: rgb(215, 58, 73);
  border-bottom: 2px solid rgb(175, 28, 42);
  &:hover {
    background: rgb(175, 28, 42);
    border-bottom: 2px solid rgb(103, 16, 25);
  }
`;
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

const TableScroll = styled.div`
  overflow: scroll;
`;

const IssueTable = styled.table`
  border: 1px solid rgb(225, 228, 232);
  border-radius: 6px;
  td {
    padding: 8px;
    text-align: left;
    min-width: 10rem;
    border-bottom: 1px solid rgb(225, 228, 232);
  }
  th {
    padding: 8px;
    text-align: left;
    min-width: 10rem;
    border-bottom: 1px solid rgb(225, 228, 232);
  }
  .outline {
    width: 140rem;
  }
  th:first-child {
    min-width: auto;
  }
  td:first-child {
    min-width: auto;
  }
  tr {
    cursor: pointer;
    &:hover td {
      background-color: rgb(198, 218, 230, 0.25);
    }
  }
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

const issueTableList = {
  text: "",
  status: "ステータス",
  author: "作成者",
  created: "作成日付",
  updated: "更新日付",
};

const issueInfo = {
  Issue1: {
    text: "A bug in Top Page",
    status: "Open",
    author: "",
    created: "06-02-2024",
    updated: "06-02-2024",
  },
  Issue2: {
    text: "A problem of performance in Top Page",
    status: "Open",
    author: "",
    created: "06-02-2024",
    updated: "06-02-2024",
  },
  Issue3: {
    text: "fix layout",
    status: "Close",
    author: "",
    created: "06-02-2024",
    updated: "06-02-2024",
  },
};

export function TabPage({ name, isActive, tabClick }) {
  if (name === tabPages.issue) {
    return (
      <TabCard $isActive={isActive} onClick={tabClick}>
        <TabCardText>{tabPages.issue}</TabCardText>
      </TabCard>
    );
  } else if (name === tabPages.pullRequest) {
    return (
      <TabCard $isActive={isActive} onClick={tabClick}>
        <TabCardText>{tabPages.pullRequest}</TabCardText>
      </TabCard>
    );
  }
}

function IssueListRow(props) {
  return (
    <tr>
      <td>
        <input type="checkbox"></input>
      </td>
      <td className="outline">{props.issueParam.text}</td>
      <td>{props.issueParam.status}</td>
      <td>{props.issueParam.author}</td>
      <td>{props.issueParam.created}</td>
      <td>{props.issueParam.updated}</td>
    </tr>
  );
}

let isIssuePage = true;
export function DisplayIssueTable({ isIssuePage }) {
  if (isIssuePage) {
    return (
      <TableScroll>
        <IssueTable>
          <thead>
            <tr>
              <th>
                <input type="checkbox"></input>
              </th>
              {Object.values(issueTableList).map((value) => {
                return <th>{value}</th>;
              })}
            </tr>
            {Object.keys(issueInfo).map((key) => (
              <IssueListRow key={key} issueParam={issueInfo[key]} />
            ))}
          </thead>
        </IssueTable>
      </TableScroll>
    );
  }
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
          <PrimaryButton> New </PrimaryButton>
          <WarningButton>Delete </WarningButton>
        </MainHeaderBtn>
      </MainHeader>
    );
  }
}

export default function IssuePage() {
  return (
    <>
      <GlobalStyle />
      <HeaderSection />
      <MainPage>
        <MainSection>
          <DisplayIssueHeader isIssueHeader={isIssuePage} />
          <DisplayIssueTable isIssuePage={isIssuePage} />
        </MainSection>
      </MainPage>
    </>
  );
}
