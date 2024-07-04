import styled from "styled-components";
import { InputWindow } from "../atoms/Text";
import { PrimaryButton } from "../atoms/Button";

import AddIssueModal from "../organisms/AddIssueModal";
import { useDispatch } from "react-redux";
import { openModal } from "../../features/OpenModal";

const MainHeader = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
`;

const InputForm = styled.div`
  padding: 8px 16px;
  display: flex;
  width: 100%;
`;

const MainHeaderBtn = styled.div`
  display: flex;
`;
export default function IssueHeaderSection({ isIssueHeader }) {
  const dispatch = useDispatch();
  if (isIssueHeader) {
    return (
      <MainHeader>
        <h2>Issue</h2>
        <InputForm>
          <InputWindow type="input" placeholder="issue名で検索"></InputWindow>
        </InputForm>
        <MainHeaderBtn>
          <PrimaryButton isPrimary={true} onClick={() => dispatch(openModal())}>
            New
          </PrimaryButton>
          <PrimaryButton isPrimary={false}>Delete </PrimaryButton>
          <AddIssueModal />
        </MainHeaderBtn>
      </MainHeader>
    );
  }
}
