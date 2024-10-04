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
  &:hover {
    background-color: rgb(198, 218, 230, 0.25);
  }
`;
export default function IssueTableRow({ list, active, onCheck }) {
  const { uuid, title, status, author, createBy } = list;
  const dispatch = useDispatch();
  function handleClick(e, id) {
    e.stopPropagation();
    onCheck(id);
  }
  return (
    <Row onClick={() => dispatch(openModal(list))}>
      <Item>
        <input
          type="checkbox"
          checked={active}
          onClick={(e) => handleClick(e, uuid)}
        ></input>
      </Item>
      <Item className="outline">{title}</Item>
      <Item>{status}</Item>
      <Item>{author}</Item>
      <Item>{createBy}</Item>
      <Item>{createBy}</Item>
    </Row>
  );
}
