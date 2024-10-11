import React, { useState, useMemo } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { issues } from "../../features/issueSlice";
import IssueTableRow from "./IssueTableRow";
import IssueHeader from "./IssueHeader";
import TableWarning from "../molecules/TableWarning";
import IssueModal from "./IssueModal";

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
  const issueId = {};
  const ids = [];
  issueList.forEach((value) => {
    const id = value.id;
    issueId[id] = value;
    ids.push(id);
  });

  const [searchWord, setSearchWord] = useState("");
  const [allCheck, setAllCheck] = useState(false);
  const [checked, setChecked] = useState([]);

  function onClickAllCheck() {
    if (allCheck) setChecked([]);
    else setChecked(ids);
    setAllCheck(!allCheck);
  }

  const filteredIssues = useMemo(
    () =>
      issueList.filter((it) => !searchWord || it.title.includes(searchWord)),
    [searchWord, issueId],
  );
  const filteredAll = filteredIssues.length === 0;

  function onClickCheckBox(current, id) {
    if (current) {
      const nextChecked = checked.concat(id);
      setChecked(nextChecked);
    } else {
      const nextChecked = checked.filter((x) => x !== id);
      setChecked(nextChecked);
    }
  }
  if (!isIssuePage) return;
  return (
    <>
      <IssueHeader
        text={searchWord}
        changeWord={setSearchWord}
        checkedIssue={checked}
      />
      <Scroll>
        <TableStyle>
          <thead>
            <tr>
              <Header>
                <input
                  type="checkbox"
                  checked={allCheck}
                  onClick={onClickAllCheck}
                ></input>
              </Header>
              {Object.values(issueStatus).map((value) => {
                return <Header key={value}>{value}</Header>;
              })}
            </tr>
            {filteredIssues.map((value) => (
              <IssueTableRow
                key={value.id}
                issue={value}
                active={checked.includes(value.id)}
                onCheck={onClickCheckBox}
              />
            ))}
            <TableWarning isActive={filteredAll}>
              データがありません
            </TableWarning>
          </thead>
        </TableStyle>
        <IssueModal />
      </Scroll>
    </>
  );
}
