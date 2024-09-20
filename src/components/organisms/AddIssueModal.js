import ReactModal from "react-modal";
import styled from "styled-components";
import { useState } from "react";
import Button from "../atoms/Button";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, modalState } from "../../features/ModalSlice";
import { InputWindow, InputForm } from "../atoms/Text";
import { addIssue } from "../../features/IssueSlice";
import { getDate } from "../../utils/date";

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

const Section = styled.div`
  padding: 16px;
`;
const SubTitle = styled.label`
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

export default function AddIssueModal({ addPram }) {
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
    addPram();
  }
  return (
    <ReactModal isOpen={isOpen}>
      <MainSection>
        <Header>Issueを追加</Header>
        <Body>
          <Section>
            <SubTitle>タイトル</SubTitle>
            <InputWindow
              type="input"
              placeholder="タイトルを入力してください"
              id="titleForm"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            ></InputWindow>
          </Section>
          <Section>
            <SubTitle>説明</SubTitle>
            <InputForm
              type="input"
              placeholder="説明を入力してください"
              id="textForm"
              value={text}
              onChange={(event) => setText(event.target.value)}
            ></InputForm>
          </Section>
          <Section>
            <SubTitle>ステータス</SubTitle>
            <select>
              <option value="Open">Open</option>
              <option value="Close">Close</option>
            </select>
          </Section>
        </Body>
        <Description />
        <Footer>
          <Button variant={"primary"} onClick={() => makeIssue()}>
            作成
          </Button>
          <Button onClick={() => dispatch(closeModal())}>閉じる</Button>
        </Footer>
      </MainSection>
    </ReactModal>
  );
}
