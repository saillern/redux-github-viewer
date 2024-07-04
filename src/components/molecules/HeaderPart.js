import styled from "styled-components";
import { LargeFont, ListFont } from "../atoms/Text";

//HeaderSectionにマージする
export const HeaderTitle = styled(LargeFont)`
  white-space: nowrap;
  &:hover {
    cursor: pointer;
  }
`;

export const HeaderListText = styled(ListFont)`
  color: white;
  &:hover {
    cursor: pointer;
  }
`;
