import styled from "styled-components";
import HeaderSection from "../organisms/HeaderSection";
import IssueTableSection from "../organisms/IssueTable";
import IssueHeader from "../organisms/IssueHeader";

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
  return (
    <>
      <HeaderSection />
      <Body>
        <Section>
          <IssueHeader isIssueHeader={isIssuePage} />
          <IssueTableSection isIssuePage={isIssuePage} />
        </Section>
      </Body>
    </>
  );
}
