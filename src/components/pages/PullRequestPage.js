import styled from "styled-components";

const Body = styled.div`
  padding: 16px;
  margin-top: 128px;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  padding: 0px;
  margin: 0px;
`;

export default function PullRequestPage({ isOpen }) {
  if (!isOpen) return;
  return (
    <>
      <Body>
        <Title>PullRequest</Title>
      </Body>
    </>
  );
}
