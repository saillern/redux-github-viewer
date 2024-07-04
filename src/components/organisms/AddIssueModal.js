import ReactModal from "react-modal";
import styled from "styled-components";
import { PrimaryButton } from "../atoms/Button";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, modalState } from "../../features/OpenModal";
import { InputWindow, InputForm } from "../atoms/Text";
import { addIssue, Issue } from "../../features/IssueSlice";
import { useRef } from "react";

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

function getDate() {
  const today = new Date();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const year = String(today.getFullYear());
  const date = month + "-" + day + "-" + year;
  return date;
}

export default function AddIssueModal() {
  const inputTitleRef = useRef(null);
  const inputTextRef = useRef(null);
  const isOpen = useSelector(modalState);
  const dispatch = useDispatch();
  const issues = useSelector(Issue);

  function makeIssue() {
    const issueTitle = inputTitleRef.current.value;
    const issueText = inputTextRef.current.value;
    const created = getDate();
    const num = issues.index + 1;
    const newIssue = {
      index: num,
      data: {
        num: {
          id: num - 1,
          title: issueTitle,
          description: issueText,
          status: "Close",
          author: "",
          createBy: created,
        },
      },
    };
    dispatch(addIssue(newIssue));
  }
  return (
    <div>
      <ReactModal isOpen={isOpen}>
        <MainSection>
          <Header>Issueを追加</Header>
          <Body>
            <InputSection>
              <FormText>タイトル</FormText>
              <InputWindow
                type="input"
                placeholder="タイトルを入力してください"
                id="TitleForm"
                ref={inputTitleRef}
              ></InputWindow>
            </InputSection>
            <InputSection>
              <FormText>説明</FormText>
              <InputForm
                type="input"
                placeholder="説明を入力してください"
                id="TextForm"
                ref={inputTextRef}
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
    </div>
  );
}
