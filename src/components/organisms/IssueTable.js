import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { issues } from "../../features/IssueSlice";
import IssueTableRow from "./IssueTableRow";
import IssueHeader from "./IssueHeader";
import TableWarning from "../molecules/TableWarning";
import AddIssueModal from "./AddIssueModal";

const Scroll = styled.div`
  overflow: scroll;
`;

const Header = styled.th`
  padding: 8px;
  text-align: left;
  min-width: 10rem;
  border-bottom: 1px solid rgb(225, 228, 232);
  &:first-child {
    min-width: auto;
  }
`;

const TableStyle = styled.table`
  border: 1px solid rgb(225, 228, 232);
  border-radius: 6px;
  .outline {
    width: 140rem;
  }
`;

const issueStatus = {
  title: "",
  status: "ステータス",
  author: "作成者",
  created: "作成日付",
  updated: "更新日付",
};

export default function IssueTable({ isIssuePage }) {
  const issueList = useSelector(issues);
  const num = issueList.length;
  const [searchWord, setSearchWord] = useState("");
  const [checkedHeader, setCheckedHeader] = useState(false);
  const [checked, setChecked] = useState(Array(num).fill(false));
  const [selectd, setSelected] = useState(Array(num).fill(true));
  function onClickHeaderCheckBox() {
    setCheckedHeader(!checkedHeader);
    const nextChecked = Array(num).fill(!checkedHeader);
    setChecked(nextChecked);
  }
  function searchIssues(word) {
    const nextSelected = selectd.map((val, i) => {
      return issueList[i].title.includes(word);
    });
    setSelected(nextSelected);
  }

  function noColumns() {
    for (let i = 0; i < checked.length; i++) {
      if (selectd[i]) return false;
    }
    return true;
  }
  function onClickCheckBox(index) {
    const nextChecked = Object.values(checked).map((val, i) => {
      if (i === index) {
        return !val;
      }
      return val;
    });
    setChecked(nextChecked);
  }
  function addParam() {
    setChecked([...checked, false]);
    setSelected([...selectd, true]);
  }
  function deleteParam(index) {
    setChecked(checked.filter((val, i) => i != index));
    setSelected(selectd.filter((val, i) => i != index));
  }
  if (!isIssuePage) return;
  return (
    <>
      <IssueHeader
        text={searchWord}
        changeWord={setSearchWord}
        selectedTable={searchIssues}
        checkList={checked}
        deleteIssue={deleteParam}
      />
      <Scroll>
        <TableStyle>
          <thead>
            <tr>
              <Header>
                <input
                  type="checkbox"
                  checked={checkedHeader}
                  onClick={() => onClickHeaderCheckBox()}
                ></input>
              </Header>
              {Object.values(issueStatus).map((value) => {
                return <Header key={value}>{value}</Header>;
              })}
            </tr>
            {issueList.map((val, i) => (
              <IssueTableRow
                key={val}
                isActive={selectd[i]}
                id={i}
                list={issueList[i]}
                checked={checked[i]}
                handleCheck={onClickCheckBox}
              />
            ))}
            <TableWarning isActive={noColumns()}>
              データがありません
            </TableWarning>
          </thead>
        </TableStyle>
        <AddIssueModal addPram={addParam} />
      </Scroll>
    </>
  );
}
