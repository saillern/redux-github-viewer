import React from "react";
import { TableScroll, IssueTableStyle } from "../molecules/IssueTablePart";
import { updateIssueInfo } from "../../features/IssueTableSlice";
import { useSelector, useDispatch } from "react-redux";
import { openModal } from "../../features/OpenModal";

const issueTableFormat = {
  title: "",
  status: "ステータス",
  author: "作成者",
  created: "作成日付",
  updated: "更新日付",
};

function IssueTableRow(props) {
  const title = props.issueParam.title;
  const status = props.issueParam.status ? "Open" : "Close";
  const author = props.issueParam.author;
  const created = props.issueParam.createBy;
  const updated = props.issueParam.createBy;
  const dispatch = useDispatch();
  return (
    <tr onClick={() => dispatch(openModal())}>
      <td>
        <input type="checkbox"></input>
      </td>
      <td className="outline">{title}</td>
      <td>{status}</td>
      <td>{author}</td>
      <td>{created}</td>
      <td>{updated}</td>
    </tr>
  );
}

export default function IssueTableSection({ isIssuePage }) {
  const issueInfo = useSelector(updateIssueInfo);
  if (!isIssuePage) return;

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
          {Object.keys(issueInfo.data).map((key) => (
            <IssueTableRow key={key} issueParam={issueInfo.data[key]} />
          ))}
        </thead>
      </IssueTableStyle>
    </TableScroll>
  );
}
