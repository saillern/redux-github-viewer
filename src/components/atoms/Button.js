import styled from "styled-components";

export const Button = styled.a`
  cursor: pointer;
  display: block;
  width: 100%;
  text-align: center;
`;

const MainButton = styled(Button)`
  padding: 4px 16px;
  margin: 4px;
  min-width: 100px;
  font-size: 1rem;
  border-radius: 6px;
`;

export const PrimaryButton = styled(MainButton)`
  color: white;
  background: rgb(66, 195, 96);
  border-bottom: 2px solid rgb(40, 167, 69);
  &:hover {
    background: rgb(40, 167, 69);
    border-bottom: 2px solid rgb(32, 132, 55);
  }
`;

export const WarningButton = styled(MainButton)`
  color: white;
  background: rgb(215, 58, 73);
  border-bottom: 2px solid rgb(175, 28, 42);
  &:hover {
    background: rgb(175, 28, 42);
    border-bottom: 2px solid rgb(103, 16, 25);
  }
`;
