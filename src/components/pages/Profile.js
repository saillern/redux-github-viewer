import styled from "styled-components";

const Body = styled.div`
  max-width: 896px;
  margin: 0px auto;
  padding: 32px 16px;
`;

const Section = styled.div`
  padding: 16px;
  margin: auto;
`;

const Title = styled.h1`
  font-size: 2rem;
  padding: 0px;
  margin: 0px;
`;

const Card = styled.div`
  margin: 32px 0px;
  display: flex;
  border-radius: 6px;
  border: 1px solid rgb(225, 228, 232);
`;
const Tile = styled.div`
  padding: 16px;
  width: 50%;
`;

const Label = styled.label`
  color: rgb(88, 96, 105);
`;

const Content = styled.p`
  font-size: 1.2rem;
`;

export default function Profile() {
  return (
    <Body>
      <Section>
        <Title>Prifile</Title>
        <Card>
          <Tile>
            <Label>プロフィール</Label>
            <Content>
              <img src="https://avatars1.githubusercontent.com/u/25723193?s=60&u=5f2d871352830fdf1a79ee285e0712044105ca91&v=4"></img>
            </Content>
          </Tile>
          <Tile>
            <div>
              <Label>ユーザ名</Label>
              <Content>jjoo</Content>
            </div>
            <div>
              <Label>メールアドレス</Label>
              <Content>hoge@example.com</Content>
            </div>
          </Tile>
        </Card>
      </Section>
    </Body>
  );
}
