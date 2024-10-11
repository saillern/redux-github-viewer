import ReactModal from "react-modal";
import styled from "styled-components";
import { useState } from "react";
import Button from "../atoms/Button";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, modalState } from "../../features/modalSlice";
import { InputWindow, InputForm } from "../atoms/Text";
import { addIssue, editIssue } from "../../features/issueSlice";
import { getDate } from "../../utils/date";
import { SelectState } from "./SelectState";

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

export default function AddIssueModal() {
  const dispatch = useDispatch();
  const { isOpen, issue } = useSelector(modalState);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [status, setStatus] = useState("Open");
  const state = !issue ? "Open" : issue.status;
  const buttonText = !issue ? "作成" : "更新";

  function makeIssue() {
    const created = getDate();
    const newIssue = {
      title,
      description: text,
      status,
      author: "",
      createBy: created,
    };
    dispatch(addIssue(newIssue));
  }

  function changeIssue() {
    const nextIssue = {
      id: issue.id,
      title,
      description: text,
      status,
      author: issue.author,
      createBy: issue.createBy,
    };
    dispatch(editIssue(nextIssue));
  }
  function initialize() {
    setTitle(!issue ? "" : issue.title);
    setText(!issue ? "" : issue.description);
  }
  function getStatus(e) {
    setStatus(e.target.value);
  }
  function updateIssue() {
    if (!issue) makeIssue();
    else changeIssue();
    dispatch(closeModal());
  }
  return (
    <ReactModal isOpen={isOpen} onAfterOpen={() => initialize()}>
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
        </Body>
        <SelectState
          active={issue}
          initState={state}
          handleChange={getStatus}
        />
        <Description />
        <Footer>
          <Button variant={"primary"} onClick={() => updateIssue()}>
            {buttonText}
          </Button>
          <Button onClick={() => dispatch(closeModal())}>閉じる</Button>
        </Footer>
      </MainSection>
    </ReactModal>
  );
}
