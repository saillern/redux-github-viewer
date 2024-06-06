import React from "react";
import styled from "styled-components";
import { Btn } from "../atoms/Button";
import { InputText } from "../atoms/Text";
import * as Actions from "../../pages/Actions";
import {initialState} from "../../pages/Reducer";
import store from "../../index";


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
  td{
    padding:8px;
    text-align:left;
    min-width:10rem;
    border-bottom:1px solid rgb(225,228,232);
  }
  th{
    padding:8px;
    text-align:left;
    min-width:10rem;
    border-bottom:1px solid rgb(225,228,232);
  }
  .outline{
    width:140rem;
  }
  th:first-child{
    min-width:auto;
  }
  td:first-child{
    min-width:auto;
  }
  tr{
    cursor:pointer; 
    &:hover td{
    background-color:rgb(198,218,230,0.25);
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
    STATUS:"Close",
    AUTHOR:"",
    CREATED:"06-02-2024",
    UPDATED:"06-02-2024"
  }
}


function TabPage({ name, IsActive, onTabClick }) {
  if (name === TAB_PAGES.ISSUE) {
    return (
      <TabCard $IsActive={IsActive} onClick={onTabClick}>
        <TabCardText>{TAB_PAGES.ISSUE}</TabCardText>
      </TabCard>
    );
  }
  else if(name === TAB_PAGES.PULL_REQUEST) {
    return (
      <TabCard $IsActive={IsActive} onClick={onTabClick}>
        <TabCardText>{TAB_PAGES.PULL_REQUEST}</TabCardText>
      </TabCard>
    );
  }
}

function IssueListRow(props){
  return(
    <tr>
      <td>
        <input type="checkbox"></input>
      </td>
      <td className="outline">{props.issueParam.TEXT}</td>
      <td>{props.issueParam.STATUS}</td>
      <td>{props.issueParam.AUTHOR}</td>
      <td>{props.issueParam.CREATED}</td>
      <td>{props.issueParam.UPDATED}</td>
    </tr>
  )
};

function DsplayIssueTable({isIssuePage}){
  if(isIssuePage) {
    return(
      <TableScroll>
        <IssueTableFormat>
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
        </IssueTableFormat>
      </TableScroll>
    );
  }
}



function DisplayIssueHeader({isIssueHeader}){
  if(isIssueHeader){
    return(
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
    );
  }
}


//const PARAMS = {
//  IssueNum : 3,
//}

let isIssuePage = initialState.isIssuePage
let isPullrequestPage = initialState.isPullrequestPage
export default function TabSection() {

  function issuePageClick() {
    store.dispatch(Actions.moveIssue());
  }
  function pullrequestPageClick() {
    store.dispatch(Actions.movePullRequest());
  }
  console.log(store.getState());
  const values = store.getState();
  isIssuePage = values.isIssuePage;
  isPullrequestPage = values.isPullrequestPage;
  
  return (
    <>
      <MainPage>
        <MainTab>
          <TabPage
            name={TAB_PAGES.ISSUE}
            IsActive={isIssuePage}
            onTabClick={issuePageClick}
          />
          <TabPage
            name={TAB_PAGES.PULL_REQUEST}
            IsActive={isPullrequestPage}
            onTabClick={pullrequestPageClick}
          />
        </MainTab>
        <MainSection>
          <DisplayIssueHeader isIssueHeader={isIssuePage}/>
          <DsplayIssueTable isIssuePage={isIssuePage} />
        </MainSection>
      </MainPage>
    </>
  );
}

