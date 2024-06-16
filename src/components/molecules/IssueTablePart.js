import styled from "styled-components";

export const TableScroll = styled.div`
  overflow: scroll;
`;

export const IssueTableStyle = styled.table`
  border: 1px solid rgb(225, 228, 232);
  border-radius: 6px;
  td {
    padding: 8px;
    text-align: left;
    min-width: 10rem;
    border-bottom: 1px solid rgb(225, 228, 232);
  }
  th {
    padding: 8px;
    text-align: left;
    min-width: 10rem;
    border-bottom: 1px solid rgb(225, 228, 232);
  }
  .outline {
    width: 140rem;
  }
  th:first-child {
    min-width: auto;
  }
  td:first-child {
    min-width: auto;
  }
  tr {
    cursor: pointer;
    &:hover td {
      background-color: rgb(198, 218, 230, 0.25);
    }
  }
`;
