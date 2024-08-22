import styled from "styled-components";
import { useDispatch } from "react-redux";
import { openModal } from "../../features/ModalSlice";

const Item = styled.td`
  padding: 8px;
  text-align: left;
  min-width: 10rem;
  border-bottom: 1px solid rgb(225, 228, 232);
`;

export default function IssueTableRow({ issueParam }) {
  const { title, status, author, createBy } = issueParam;
  const dispatch = useDispatch();
  return (
    <tr onClick={() => dispatch(openModal())}>
      <Item>
        <input type="checkbox"></input>
      </Item>
      <Item className="outline">{title}</Item>
      <Item>{status}</Item>
      <Item>{author}</Item>
      <Item>{createBy}</Item>
      <Item>{createBy}</Item>
    </tr>
  );
}
