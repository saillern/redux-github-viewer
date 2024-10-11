import styled from "styled-components";
import { InputWindow } from "../atoms/Text";
import Button from "../atoms/Button";
import { useDispatch } from "react-redux";
import { openModal } from "../../features/modalSlice";
import { deleteIssue } from "../../features/issueSlice";

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

const Flex = styled.div`
  display: flex;
`;

export default function IssueHeader({ text, changeWord, checkedIssue }) {
  const dispatch = useDispatch();
  function changeText(e) {
    changeWord(e.target.value);
  }
  function handleDelete() {
    checkedIssue.forEach((id) => {
      dispatch(deleteIssue(id));
    });
  }
  return (
    <MainHeader>
      <h2>Issue</h2>
      <InputForm>
        <InputWindow
          type="input"
          placeholder="issue名で検索"
          value={text}
          onChange={changeText}
        />
      </InputForm>
      <Flex>
        <Button variant={"primary"} onClick={() => dispatch(openModal())}>
          New
        </Button>
        <Button variant={"secondary"} onClick={() => handleDelete()}>
          Delete{" "}
        </Button>
      </Flex>
    </MainHeader>
  );
}
