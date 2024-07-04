import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { IssueTableStyle } from "../molecules/IssueTableStyle";
import { updateIssueInfo } from "../../features/IssueTableSlice";
import IssueTableRow from "./IssueTableRow";

const TableScroll = styled.div`
  overflow: scroll;
`;

const TableHeaderItem = styled.th`
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

const issueTableFormat = {
  title: "",
  status: "ステータス",
  author: "作成者",
  created: "作成日付",
  updated: "更新日付",
};

export default function IssueTable({ isIssuePage }) {
  const issueInfo = useSelector(updateIssueInfo);
  if (!isIssuePage) return;

  return (
    <TableScroll>
      <IssueTableStyle>
        <thead>
          <TableRow>
            <TableHeaderItem>
              <input type="checkbox"></input>
            </TableHeaderItem>
            {Object.values(issueTableFormat).map((value) => {
              return <th key={value}>{value}</th>;
            })}
          </TableRow>
          {Object.keys(issueInfo.data).map((key) => (
            <IssueTableRow key={key} issueParam={issueInfo.data[key]} />
          ))}
        </thead>
      </IssueTableStyle>
    </TableScroll>
  );
}
