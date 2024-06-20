import ReactModal from "react-modal";
import styled from "styled-components";
import { SuccessButton, LinkButton } from "../atoms/Button";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, modalState } from "../../features/OpenModal";
import { InputWindow, InputForm } from "../atoms/Text";

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
const AddIssueWindowFooter = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  justify-content: flex-end;
  padding: 8px;
`;

export default function AddIssueModal() {
  const isOpen = useSelector(modalState);
  const dispatch = useDispatch();
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
              ></InputWindow>
            </AddIssueInputSection>
            <AddIssueInputSection>
              <AddIssueFormHeaderText>説明</AddIssueFormHeaderText>
              <InputForm
                type="input"
                placeholder="説明を入力してください"
              ></InputForm>
            </AddIssueInputSection>
          </AddIssueBody>
          <AddIssueBlock />
          <AddIssueWindowFooter>
            <SuccessButton>作成</SuccessButton>
            <LinkButton onClick={() => dispatch(closeModal())}>
              閉じる
            </LinkButton>
          </AddIssueWindowFooter>
        </AddIssueSection>
      </ReactModal>
    </div>
  );
}
