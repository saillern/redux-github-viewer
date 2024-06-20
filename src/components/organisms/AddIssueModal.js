import ReactModal from "react-modal";
import styled from "styled-components";
import { SuccessButton, LinkButton } from "../atoms/Button";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, modalState } from "../../features/OpenModal";
import { InputWindow, InputForm } from "../atoms/Text";
import { addIssue } from "../../features/IssueTableSlice";
import { useRef } from "react";

const AddIssueSection = styled.div`
  max-width: 598px;
  margin: auto;
`;
const AddIssueTitle = styled.h2`
  padding: 0px 8px;
`;
const AddIssueBody = styled.div`
  padding: 32px 0px 16px;
`;

const AddIssueInputSection = styled.div`
  padding: 16px;
`;
const AddIssueFormHeaderText = styled.label`
  display: block;
  padding: 8px 0px;
`;

const AddIssueBlock = styled.div`
  padding: 16px;
  min-height: 100px;
`;
const AddIssueModalFooter = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  justify-content: flex-end;
  padding: 8px;
`;

export default function AddIssueModal() {
  const inputTitleRef = useRef(null);
  const inputTextRef = useRef(null);
  const isOpen = useSelector(modalState);
  const dispatch = useDispatch();
  function AddIssue() {
    const issueTitle = inputTitleRef.current.value;
    const issueText = inputTextRef.current.value;
    const today = new Date();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    const year = String(today.getFullYear());
    const created = month + "-" + day + "-" + year;
    const x = {
      title: issueTitle,
      description: issueText,
      status: "Close",
      author: "",
      created: created,
      updated: created,
    };

    dispatch(addIssue(x));
  }
  return (
    <div>
      <ReactModal isOpen={isOpen}>
        <AddIssueSection>
          <AddIssueTitle>Issueを追加</AddIssueTitle>
          <AddIssueBody>
            <AddIssueInputSection>
              <AddIssueFormHeaderText>タイトル</AddIssueFormHeaderText>
              <InputWindow
                type="input"
                placeholder="タイトルを入力してください"
                id="TitleForm"
                ref={inputTitleRef}
              ></InputWindow>
            </AddIssueInputSection>
            <AddIssueInputSection>
              <AddIssueFormHeaderText>説明</AddIssueFormHeaderText>
              <InputForm
                type="input"
                placeholder="説明を入力してください"
                id="TextForm"
                ref={inputTextRef}
              ></InputForm>
            </AddIssueInputSection>
          </AddIssueBody>
          <AddIssueBlock />
          <AddIssueModalFooter>
            <SuccessButton onClick={() => AddIssue()}>作成</SuccessButton>
            <LinkButton onClick={() => dispatch(closeModal())}>
              閉じる
            </LinkButton>
          </AddIssueModalFooter>
        </AddIssueSection>
      </ReactModal>
    </div>
  );
}
