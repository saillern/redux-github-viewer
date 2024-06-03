import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { Btn } from "../atoms/Button";
import { InputText } from "../atoms/Text";

const MainPage = styled.div`
  max-width: 896px;
  margin: 0px auto;
  padding: 32px 16px;
`;

const MainTab = styled.ul`
  display: flex;
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
    props.$IsActive ? "1px solid rgb(225, 228, 232)" : "0px"};
  border-left: ${(props) =>
    props.$IsActive ? "1px solid rgb(225, 228, 232)" : "0px"};
  border-right: ${(props) =>
    props.$IsActive ? "1px solid rgb(225, 228, 232)" : "0px"};
  border-bottom: ${(props) =>
    !props.$IsActive ? "1px solid rgb(225, 228, 232)" : "0px"};
`;

const TabCardText = styled.span`
  cursor: pointer;
  color: rgb(88, 96, 105);
  padding: 16px;
  display: block;
  width: 100%;
`;

const MainSection = styled.div`
  padding: 16px;
  margin-top: 16px;
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

const ButtonTemplate = styled(Btn)`
  padding: 4px 16px;
  margin: 4px;
  min-width: 100px;
  font-size: 1rem;
  border-radius: 6px;
`;

const PrimaryButton = styled(ButtonTemplate)`
  color: white;
  background: rgb(66, 195, 96);
  border-bottom: 2px solid rgb(40, 167, 69);
  &:hover {
    background: rgb(40, 167, 69);
    border-bottom: 2px solid rgb(32, 132, 55);
  }
`;

const WarningButton = styled(ButtonTemplate)`
  color: white;
  background: rgb(215, 58, 73);
  border-bottom: 2px solid rgb(175, 28, 42);
  &:hover {
    background: rgb(175, 28, 42);
    border-bottom: 2px solid rgb(103, 16, 25);
  }
`;

const TableScroll = styled.div`
  overflow: scroll;
`;

const IssueTableFormat = styled.table`
  border: 1px solid rgb(225,228,232);
  border-radius: 6px;
  thead{
    tr{
      th{
        padding:8px;
        text-align:left;
        min-width:10rem;
        border-bottom:1px solid rgb(225,228,232);

      }
      td{
        padding:8px;
        text-align:left;
        min-width:10rem;
        border-bottom:1px solid rgb(225,228,232);

      }
      th:first-child{
        min-width:auto;
      }
    }
  }
`;


const TAB_PAGES = {
  ISSUE: "Issue",
  PULL_REQUEST: "Pull Request",
};

const ISSUE_TABLE_HEADER = {
  TEXT:"",
  STATUS:"ステータス",
  AUTHOR:"作成者",
  CREATED:"作成日付",
  UPDATED:"更新日付"
};

const ISSUE_LIST =
{

  Issue1:{
    TEXT:"A bug in Top Page",
    STATUS:"Open",
    AUTHOR:"",
    CREATED:"06-02-2024",
    UPDATED:"06-02-2024"
  },
  Issue2:{
    TEXT:"A problem of performance in Top Page",
    STATUS:"Open",
    AUTHOR:"",
    CREATED:"06-02-2024",
    UPDATED:"06-02-2024"
  },
  Issue3:{
    TEXT:"fix layout",
    STATUS:"Open",
    AUTHOR:"",
    CREATED:"06-02-2024",
    UPDATED:"06-02-2024"
  }
}

const PARAMS = {
  IssueNum : 3,
}

function TabPage({ name, IsActive, onTabClick }) {
  if (name === TAB_PAGES.ISSUE) {
    return (
      <TabCard $IsActive={IsActive} onClick={onTabClick}>
        <TabCardText>{TAB_PAGES.ISSUE}</TabCardText>
      </TabCard>
    );
  } else {
    return (
      <TabCard $IsActive={!IsActive} onClick={onTabClick}>
        <TabCardText>{TAB_PAGES.PULL_REQUEST}</TabCardText>
      </TabCard>
    );
  }
}

function IssueListRow(props){
  return(
    <tr>
      <th>
        <input type="checkbox"></input>
      </th>
      <th>{props.issueParam.TEXT}</th>
      <th>{props.issueParam.STATUS}</th>
      <th>{props.issueParam.AUTHOR}</th>
      <th>{props.issueParam.CREATED}</th>
      <th>{props.issueParam.UPDATED}</th>
    </tr>
  )
};

function DsplayIssueTable({IsIssueTable}){
  if(IsIssueTable) {
    return(
          <thead>
            <tr>
              <th>
                <input type="checkbox"></input>
              </th>
              {
                Object.values(ISSUE_TABLE_HEADER).map(value =>{
                  return(
                    <th>{value}</th>
                  );
                })
              }
            </tr>
              {
                Object.keys(ISSUE_LIST).map(key => 
                  <IssueListRow key={key} issueParam={ISSUE_LIST[key]} />
                )
              }
          </thead>
    );
  }
}

export default function TabSection() {
  const [IsIssuePage, setIsIssuePage] = useState(true);
  const [IsIssueTable, setIsIssueTable] = useState(true);
  function TabPageClick() {
    setIsIssuePage(!IsIssuePage);
  }
  return (
    <>
      <MainPage>
        <MainTab>
          <TabPage
            name={TAB_PAGES.ISSUE}
            IsActive={IsIssuePage}
            onTabClick={TabPageClick}
          />
          <TabPage
            name={TAB_PAGES.PULL_REQUEST}
            IsActive={IsIssuePage}
            onTabClick={TabPageClick}
          />
        </MainTab>
        <MainSection>
          <MainHeader>
            <h2>Issue</h2>
            <InputForm>
              <InputWindow
                type="input"
                placeholder="issue名で検索"
              ></InputWindow>
            </InputForm>
            <MainHeaderBtn>
              <PrimaryButton> New </PrimaryButton>
              <WarningButton>Delete </WarningButton>
            </MainHeaderBtn>
          </MainHeader>
      <TableScroll>
        <IssueTableFormat>
          <DsplayIssueTable IsIssueTable={IsIssueTable} />
        </IssueTableFormat>
      </TableScroll>
        </MainSection>
      </MainPage>
    </>
  );
}



