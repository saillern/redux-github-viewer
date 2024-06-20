import styled from "styled-components";

export const LargeFont = styled.h1`
  font-size: 2rem;
  padding: 0px;
  margin: 0px;
`;

export const ListFont = styled.a`
  font-size: 1.1rem;
`;

export const InputText = styled.input`
  padding: 8px;
  border: none;
  outline: none;
  background: none;
  font-size: 1rem;
  width: 100%;
`;

export const InputWindow = styled(InputText)`
  border-radius: 6px;
  border: 1px solid rgb(225, 228, 232);
`;

export const InputArea = styled.textarea`
  padding: 8px;
  border: none;
  outline: none;
  background: none;
  font-size: 1rem;
  width: 100%;
  min-height: 150px;
`;
export const InputForm = styled(InputArea)`
  border-radius: 6px;
  border: 1px solid rgb(225, 228, 232);
`;
