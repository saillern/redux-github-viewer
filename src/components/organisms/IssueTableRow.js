import styled from "styled-components";
import { useDispatch } from "react-redux";
import { openModal } from "../../features/ModalSlice";

const Item = styled.td`
  padding: 8px;
  text-align: left;
  min-width: 10rem;
  border-bottom: 1px solid rgb(225, 228, 232);
  &:first-child {
    min-width: auto;
  }
`;

const Row = styled.tr`
  cursor: pointer;
  &:hover td {
    background-color: rgb(198, 218, 230, 0.25);
  }
`;
export default function IssueTableRow({ issueParam }) {
  const { title, status, author, createBy } = issueParam[0];
  const Ischecked = issueParam[1];
  const dispatch = useDispatch();
  return (
    <Row onClick={() => dispatch(openModal())}>
      <Item>
        <input type="checkbox" checked={Ischecked}></input>
      </Item>
      <Item className="outline">{title}</Item>
      <Item>{status}</Item>
      <Item>{author}</Item>
      <Item>{createBy}</Item>
      <Item>{createBy}</Item>
    </Row>
  );
}
