import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { IssueTableStyle } from "../molecules/IssueTableStyle";
import { issues } from "../../features/IssueSlice";
import IssueTableRow from "./IssueTableRow";

const Scroll = styled.div`
  overflow: scroll;
`;

const Header = styled.th`
  padding: 8px;
  text-align: left;
  min-width: 10rem;
  border-bottom: 1px solid rgb(225, 228, 232);
`;

const TableRow = styled.tr`
  cursor: pointer;
  &:hover td {
    background-color: rgb(198, 218, 230, 0.25);
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
  if (!isIssuePage) return;

  return (
    <Scroll>
      <IssueTableStyle>
        <thead>
          <TableRow>
            <Header>
              <input type="checkbox"></input>
            </Header>
            {Object.values(issueStatus).map((value) => {
              return <th key={value}>{value}</th>;
            })}
          </TableRow>
          {issueList.map((val, i) => (
            <IssueTableRow key={i} issueParam={issueList[i]} />
          ))}
        </thead>
      </IssueTableStyle>
    </Scroll>
  );
}
