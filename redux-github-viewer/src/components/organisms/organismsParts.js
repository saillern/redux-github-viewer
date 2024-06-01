import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { Btn } from "../atoms/Button";
import { InputText } from "../atoms/Text";

const MainPage = styled.div`
  max-width: 896px;
  margin: 0px auto;
  padding: 32px 16px;
`;

const MainTab = styled.ul`
  display: flex;
`;

const TabCard = styled.li`
  li {
    padding: 0px;
  }
  font-size: 1.2rem;
  width: 100%;
  text-align: center;
  border-radius: 6px 6px 0px 0px;
  border-top: ${(props) =>
    props.$IsActive ? "1px solid rgb(225, 228, 232)" : "0px"};
  border-left: ${(props) =>
    props.$IsActive ? "1px solid rgb(225, 228, 232)" : "0px"};
  border-right: ${(props) =>
    props.$IsActive ? "1px solid rgb(225, 228, 232)" : "0px"};
  border-bottom: ${(props) =>
    !props.$IsActive ? "1px solid rgb(225, 228, 232)" : "0px"};
`;

const TabCardText = styled.span`
  cursor: pointer;
  color: rgb(88, 96, 105);
  padding: 16px;
  display: block;
  width: 100%;
`;

const MainSection = styled.div`
  padding: 16px;
  margin-top: 16px;
`;

const MainHeader = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
`;

const InputWindow = styled(InputText)`
  border-radius: 6px;
  border: 1px solid rgb(225, 228, 232);
`;

const InputForm = styled.div`
  padding: 8px 16px;
  display: flex;
  width: 100%;
`;

const MainHeaderBtn = styled.div`
  display: flex;
`;

const ButtonTemplate = styled(Btn)`
  padding: 4px 16px;
  margin: 4px;
  min-width: 100px;
  font-size: 1rem;
  border-radius: 6px;
`;

const PrimaryButton = styled(ButtonTemplate)`
  color: white;
  background: rgb(66, 195, 96);
  border-bottom: 2px solid rgb(40, 167, 69);
  &:hover {
    background: rgb(40, 167, 69);
    border-bottom: 2px solid rgb(32, 132, 55);
  }
`;

const WarningButton = styled(ButtonTemplate)`
  color: white;
  background: rgb(215, 58, 73);
  border-bottom: 2px solid rgb(175, 28, 42);
  &:hover {
    background: rgb(175, 28, 42);
    border-bottom: 2px solid rgb(103, 16, 25);
  }
`;

const TAB_PAGES = {
  ISSUE: "Issue",
  PULL_REQUEST: "Pull Request",
};

function TabPage({ name, IsActive, onTabClick }) {
  if (name === TAB_PAGES.ISSUE) {
    return (
      <TabCard $IsActive={IsActive} onClick={onTabClick}>
        <TabCardText>{TAB_PAGES.ISSUE}</TabCardText>
      </TabCard>
    );
  } else {
    return (
      <TabCard $IsActive={!IsActive} onClick={onTabClick}>
        <TabCardText>{TAB_PAGES.PULL_REQUEST}</TabCardText>
      </TabCard>
    );
  }
}
export default function TabSection() {
  const [IsIssuePage, setIsIssuePage] = useState(true);
  function TabPageClick() {
    setIsIssuePage(!IsIssuePage);
  }

  return (
    <>
      <MainPage>
        <MainTab>
          <TabPage
            name={TAB_PAGES.ISSUE}
            IsActive={IsIssuePage}
            onTabClick={TabPageClick}
          />
          <TabPage
            name={TAB_PAGES.PULL_REQUEST}
            IsActive={IsIssuePage}
            onTabClick={TabPageClick}
          />
        </MainTab>
        <MainSection>
          <MainHeader>
            <h2>Issue</h2>
            <InputForm>
              <InputWindow
                type="input"
                placeholder="issue名で検索"
              ></InputWindow>
            </InputForm>
            <MainHeaderBtn>
              <PrimaryButton> New </PrimaryButton>
              <WarningButton>Delete </WarningButton>
            </MainHeaderBtn>
          </MainHeader>
        </MainSection>
      </MainPage>
    </>
  );
}
