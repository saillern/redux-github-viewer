import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { issues } from "../../features/IssueSlice";
import IssueTableRow from "./IssueTableRow";
import TableWarning from "../molecules/TableWarning";

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

//TODO: Checkboxの動作 全選択と検索機能を追加
export default function IssueTable({ isIssuePage, searchWord }) {
  const issueList = useSelector(issues);
  const num = issueList.length;
  const [checkedHeader, setCheckedHeader] = useState(false);
  const [checked, setChecked] = useState(Array(num).fill(false));
  function onClickHeader() {
    setCheckedHeader(!checkedHeader);
    const nextChecked = Array(num).fill(!checkedHeader);
    setChecked(nextChecked);
  }
  function searchIssue(i) {
    const searchBoxFlag = issueList[i].title.includes(searchWord);
    return searchBoxFlag;
  }

  function noIndex() {
    for (let i = 0; i < checked.length; i++) {
      if (searchIssue(i)) return false;
    }
    return true;
  }
  console.log(checked);
  console.log(noIndex());
  function onClickCheckBox(index) {
    const nextChecked = Object.values(checked).map((val, i) => {
      if (i === index) {
        return !val;
      }
      return val;
    });
    setChecked(nextChecked);
  }
  if (!isIssuePage) return;
  return (
    <Scroll>
      <TableStyle>
        <thead>
          <tr>
            <Header>
              <input
                type="checkbox"
                checked={checkedHeader}
                onClick={() => onClickHeader()}
              ></input>
            </Header>
            {Object.values(issueStatus).map((value) => {
              return <Header key={value}>{value}</Header>;
            })}
          </tr>
          {issueList.map((val, i) => (
            <IssueTableRow
              key={val}
              isActive={searchIssue(i)}
              id={i}
              list={issueList[i]}
              checked={checked[i]}
              handleCheck={onClickCheckBox}
            />
          ))}
          <TableWarning isActive={noIndex()}>データがありません</TableWarning>
        </thead>
      </TableStyle>
    </Scroll>
  );
}
