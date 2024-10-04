import React, { useState, useMemo } from "react";
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
  const issueId = new Map();
  const issueList = useSelector(issues);
  issueList.forEach((value) => {
    const id = value.uuid;
    issueId.set(id, value);
  });

  const [searchWord, setSearchWord] = useState("");
  const [allCheck, setAllCheck] = useState(false);

  const nextChecked = new Map();
  for (const value of issueId) {
    const uuid = value[0];
    nextChecked.set(uuid, false);
  }
  const [checked, setChecked] = useState(nextChecked);

  function onClickAllCheck() {
    const next = new Map();
    checked.forEach((value, key) => {
      next.set(key, !allCheck);
    });
    setChecked(next);
    setAllCheck(!allCheck);
  }

  const filteredIssues = useMemo(
    () =>
      issueList.filter((it) => !searchWord || it.title.includes(searchWord)),
    [searchWord, issueId],
  );
  const filteredAll = filteredIssues.length === 0;

  function onClickCheckBox(id) {
    const nextChecked = new Map();
    checked.forEach((value, key) => {
      nextChecked.set(key, key != id ? value : !value);
    });
    setChecked(nextChecked);
  }
  function createIssue(id) {
    const nextChecked = checked;
    nextChecked.set(id, false);
    setChecked(nextChecked);
  }
  function deleteIssue(id) {
    const nextChecked = checked;
    nextChecked.delete(id);
    setChecked(nextChecked);
  }
  if (!isIssuePage) return;
  return (
    <>
      <IssueHeader
        text={searchWord}
        changeWord={setSearchWord}
        checkedIssue={checked}
        onDelete={deleteIssue}
      />
      <Scroll>
        <TableStyle>
          <thead>
            <tr>
              <Header>
                <input
                  type="checkbox"
                  checked={allCheck}
                  onClick={() => onClickAllCheck()}
                ></input>
              </Header>
              {Object.values(issueStatus).map((value) => {
                return <Header key={value}>{value}</Header>;
              })}
            </tr>
            {filteredIssues.map((value) => (
              <IssueTableRow
                key={value.uuid}
                list={issueId.get(value.uuid)}
                active={checked.get(value.uuid)}
                onCheck={onClickCheckBox}
              />
            ))}
            <TableWarning isActive={filteredAll}>
              データがありません
            </TableWarning>
          </thead>
        </TableStyle>
        <AddIssueModal onSubmit={createIssue} />
      </Scroll>
    </>
  );
}
