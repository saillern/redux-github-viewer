import styled from "styled-components";
import { useDispatch } from "react-redux";
import { openModal } from "../../features/ModalSlice";

const TableItem = styled.td`
  padding: 8px;
  text-align: left;
  min-width: 10rem;
  border-bottom: 1px solid rgb(225, 228, 232);
`;

export default function IssueTableRow({ issueParam }) {
  const { title, status, author, createBy } = issueParam;
  console.log(issueParam);
  const dispatch = useDispatch();
  return (
    <tr onClick={() => dispatch(openModal())}>
      <TableItem>
        <input type="checkbox"></input>
      </TableItem>
      <TableItem className="outline">{title}</TableItem>
      <TableItem>{status}</TableItem>
      <TableItem>{author}</TableItem>
      <TableItem>{createBy}</TableItem>
      <TableItem>{createBy}</TableItem>
    </tr>
  );
}
