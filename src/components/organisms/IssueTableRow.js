import styled from "styled-components";
import { useDispatch } from "react-redux";
import { openModal } from "../../features/OpenModal";

const TableItem = styled.td`
  padding: 8px;
  text-align: left;
  min-width: 10rem;
  border-bottom: 1px solid rgb(225, 228, 232);
`;

export default function IssueTableRow(props) {
  const title = props.issueParam.title;
  const status = props.issueParam.status;
  const author = props.issueParam.author;
  const created = props.issueParam.createBy;
  const updated = props.issueParam.createBy;
  const dispatch = useDispatch();
  return (
    <tr onClick={() => dispatch(openModal())}>
      <TableItem>
        <input type="checkbox"></input>
      </TableItem>
      <TableItem className="outline">{title}</TableItem>
      <TableItem>{status}</TableItem>
      <TableItem>{author}</TableItem>
      <TableItem>{created}</TableItem>
      <TableItem>{updated}</TableItem>
    </tr>
  );
}
