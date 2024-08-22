import ReactModal from "react-modal";
import styled from "styled-components";
import { useState } from "react";
import { PrimaryButton } from "../atoms/Button";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, modalState } from "../../features/ModalSlice";
import { InputWindow, InputForm } from "../atoms/Text";
import { addIssue } from "../../features/IssueSlice";
import { getDate } from "../../features/GetDate";

const MainSection = styled.div`
  max-width: 598px;
  margin: auto;
`;
const Header = styled.h2`
  padding: 0px 8px;
`;
const Body = styled.div`
  padding: 32px 0px 16px;
`;

const InputSection = styled.div`
  padding: 16px;
`;
const FormText = styled.label`
  display: block;
  padding: 8px 0px;
`;

const Description = styled.div`
  padding: 16px;
  min-height: 100px;
`;
const Footer = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  justify-content: flex-end;
  padding: 8px;
`;

export default function AddIssueModal() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const isOpen = useSelector(modalState);
  const dispatch = useDispatch();
  function makeIssue() {
    const created = getDate();
    const issue = {
      title: title,
      description: text,
      status: "Open",
      author: "",
      createBy: created,
    };
    dispatch(addIssue(issue));
    dispatch(closeModal());
    setTitle("");
    setText("");
  }
  return (
    <ReactModal isOpen={isOpen}>
      <MainSection>
        <Header>Issueを追加</Header>
        <Body>
          <InputSection>
            <FormText>タイトル</FormText>
            <InputWindow
              type="input"
              placeholder="タイトルを入力してください"
              id="titleForm"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            ></InputWindow>
          </InputSection>
          <InputSection>
            <FormText>説明</FormText>
            <InputForm
              type="input"
              placeholder="説明を入力してください"
              id="textForm"
              value={text}
              onChange={(event) => setText(event.target.value)}
            ></InputForm>
          </InputSection>
        </Body>
        <Description />
        <Footer>
          <PrimaryButton isPrimary={true} onClick={() => makeIssue()}>
            作成
          </PrimaryButton>
          <PrimaryButton
            isPrimary={true}
            onClick={() => dispatch(closeModal())}
          >
            閉じる
          </PrimaryButton>
        </Footer>
      </MainSection>
    </ReactModal>
  );
}
