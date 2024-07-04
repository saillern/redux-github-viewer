import styled from "styled-components";

const Button = styled.a`
  cursor: pointer;
  display: block;
  width: 100%;
  text-align: center;
  padding: 4px 16px;
  margin: 4px;
  min-width: 100px;
  font-size: 1rem;
  border-radius: 6px;
  width: auto;
`;

//色を引数で変更できる形にする
export const PrimaryButton = styled(Button)`
  color: white;
  background: ${(props) =>
    props.isPrimary ? "rgb(66, 195, 96)" : "rgb(215, 58, 73)"};
  border-bottom: 2px solid
    ${(props) => (props.isPrimary ? "rgb(40, 167, 69)" : " rgb(175, 28, 42)")};
  &:hover {
    background: ${(props) =>
      props.isPrimary ? "rgb(40, 167, 69)" : "rgb(175, 28, 42)"};
    border-bottom: 2px solid
      ${(props) => (props.isPrimary ? "rgb(32, 132, 55)" : "rgb(103, 16, 25)")};
  }
`;
