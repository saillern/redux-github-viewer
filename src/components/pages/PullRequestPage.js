import styled from "styled-components";
import HeaderSection from "../organisms/HeaderPart";
import { GlobalStyle } from "../../App";

const PullRequestSection = styled.div`
  padding: 16px;
  margin-top: 128px;
`;

const PullRequestSectionTitle = styled.h1`
  text-align: center;
  font-size: 2rem;
  padding: 0px;
  margin: 0px;
`;

export default function PullRequestPage() {
  return (
    <>
      <GlobalStyle />
      <HeaderSection />
      <PullRequestSection>
        <PullRequestSectionTitle>PullRequest</PullRequestSectionTitle>
      </PullRequestSection>
    </>
  );
}
