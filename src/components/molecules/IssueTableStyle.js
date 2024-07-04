import styled from "styled-components";

export const IssueTableStyle = styled.table`
  border: 1px solid rgb(225, 228, 232);
  border-radius: 6px;
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
