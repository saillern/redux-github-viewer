import styled from "styled-components";
import IssueTableSection from "../organisms/IssueTable";
import IssueHeader from "../organisms/IssueHeader";
import { useState } from "react";

const Body = styled.div`
  max-width: 896px;
  margin: 0px auto;
  padding: 32px 16px;
`;

const Section = styled.div`
  padding: 16px;
  margin-top: 16px;
`;

//TODO:useStateで書き換える
let isIssuePage = true;
//TODO:入力フォームのテキストをuseStateで管理する
export default function IssuePage() {
  const [searchWord, setSearchWord] = useState("");
  function changeWordState(newWord) {
    setSearchWord(newWord);
  }

  return (
    <>
      <Body>
        <Section>
          <IssueHeader
            isIssueHeader={isIssuePage}
            text={searchWord}
            changeWord={() => changeWordState()}
          />
          <IssueTableSection isIssuePage={isIssuePage} />
        </Section>
      </Body>
    </>
  );
}
