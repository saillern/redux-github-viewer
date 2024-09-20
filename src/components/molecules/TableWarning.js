import styled from "styled-components";

const Td = styled.td.attrs({ colSpan: "3" })`
  padding: 8px;
  text-align: left;
  min-width: 10rem;
`;

export default function TableWarning({ isActive }) {
  if (!isActive) return;
  return <Td>データがありません</Td>;
}
