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

const modalStyle = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.75)",
  },
  content: {
    position: "absolute",
    top: "40px",
    left: "40px",
    right: "40px",
    bottom: "40px",
    border: "1px solid #ccc",
    background: "#fff",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "4px",
    outline: "none",
    padding: "20px",
    margin: "auto",
    width: "60%",
  },
};
export default function AddIssueModal() {
  const dispatch = useDispatch();
  const { isOpen, issue } = useSelector(modalState);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Open");
  const create = !issue;
  const state = create ? "Open" : issue.status;
  const buttonText = create ? "作成" : "更新";

  function makeIssue() {
    const created = getDate();
    const newIssue = {
      title,
      description,
      status,
      author: "",
      createBy: created,
    };
    dispatch(addIssue(newIssue));
  }

  function changeIssue() {
    const nextIssue = {
      ...issue,
      title,
      description,
      status,
    };
    dispatch(editIssue(nextIssue));
  }
  function initialize() {
    setTitle(create ? "" : issue.title);
    setDescription(create ? "" : issue.description);
  }
  function getStatus(e) {
    setStatus(e.target.value);
  }
  function updateIssue() {
    if (create) makeIssue();
    else changeIssue();
    dispatch(closeModal());
  }
  return (
    <ReactModal
      isOpen={isOpen}
      onAfterOpen={initialize}
      onRequestClose={() => dispatch(closeModal())}
      style={modalStyle}
    >
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
              onChange={(e) => setTitle(e.target.value)}
            ></InputWindow>
          </Section>
          <Section>
            <SubTitle>説明</SubTitle>
            <InputForm
              type="input"
              placeholder="説明を入力してください"
              id="textForm"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
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
