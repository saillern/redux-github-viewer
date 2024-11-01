import styled from "styled-components";
import { useDispatch } from "react-redux";
import { openModal } from "../../features/modalSlice";

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
export default function IssueTableRow({ issue, active, onCheck }) {
  const { id, title, status, author, createBy } = issue;
  const dispatch = useDispatch();
  function handleClick(e) {
    e.stopPropagation();
    onCheck(e.target.checked, id);
  }
  return (
    <Row onClick={() => dispatch(openModal(issue))}>
      <Item>
        <input
          type="checkbox"
          checked={active}
          onClick={(e) => handleClick(e)}
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
