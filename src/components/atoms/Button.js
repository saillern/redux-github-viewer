import styled, { css } from "styled-components";

//Fixed:色を引数で変更できる形式にする(前回レビュー箇所)
export const Button = styled.a`
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
  ${(props) =>
    props.primary &&
    css`
      background: rgb(66, 195, 96);
      color: white;
      border-bottom: 2px solid rgb(40, 167, 69) &hover {
        background: rgb(40, 167, 69);
        border-bottom: 2px solid rgb(32, 132, 55);
      }
    `};
  ${(props) =>
    props.secondary &&
    css`
      background: rgb(215, 58, 73);
      color: white;
      border-bottom: 2px solid rgb(175, 28, 42) &hover {
        background: rgb(175, 28, 42);
        border-bottom: 2px solid rgb(103, 16, 25);
      }
    `};
  }
`;
