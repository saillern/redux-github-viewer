import styled from "styled-components";
import HeaderSection from "../organisms/HeaderSection";
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
export default function IssuePage() {
  const [searchWord, setSearchWord] = useState("");
  function changeWordState(newWord) {
    setSearchWord(newWord);
  }

  return (
    <>
      <HeaderSection />
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
