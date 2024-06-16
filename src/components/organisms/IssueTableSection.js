import React from "react";
import { TableScroll, IssueTableStyle } from "../molecules/IssueTablePart";
import { updateIssueInfo } from "../../features/IssueTableSlice";
import { useSelector } from "react-redux";

const issueTableFormat = {
  text: "",
  status: "ステータス",
  author: "作成者",
  created: "作成日付",
  updated: "更新日付",
};

function IssueTableRow(props) {
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

export default function IssueTableSection({ isIssuePage }) {
  const issueInfo = useSelector(updateIssueInfo);
  if (isIssuePage) {
    return (
      <TableScroll>
        <IssueTableStyle>
          <thead>
            <tr>
              <th>
                <input type="checkbox"></input>
              </th>
              {Object.values(issueTableFormat).map((value) => {
                return <th key={value}>{value}</th>;
              })}
            </tr>
            {Object.keys(issueInfo).map((key) => (
              <IssueTableRow key={key} issueParam={issueInfo[key]} />
            ))}
          </thead>
        </IssueTableStyle>
      </TableScroll>
    );
  }
}
