import styled from "styled-components";
import IssueSection from "../organisms/IssueSection";

const Body = styled.div`
  max-width: 896px;
  margin: 0px auto;
  padding: 32px 16px;
`;

const Section = styled.div`
  padding: 16px;
  margin-top: 16px;
`;

export default function IssuePage({ isOpen }) {
  return (
    <Body>
      <Section>
        <IssueSection isOpen={isOpen} />
      </Section>
    </Body>
  );
}
