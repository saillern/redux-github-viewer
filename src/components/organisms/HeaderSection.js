import styled from "styled-components";
import { LargeFont, ListFont } from "../atoms/Text";
import { FaBars } from "react-icons/fa";
import { HamburgerMenu } from "../molecules/HamburgerMenu";
import { useState } from "react";

const Header = styled.div`
  display: flex;
  padding: 16px;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  background: rgb(51, 51, 51);
  color: white;
  a {
    text-decoration: none;
  }
`;

const Title = styled(LargeFont)`
  white-space: nowrap;
  &:hover {
    cursor: pointer;
  }
`;

const TitleText = styled.a`
  color: white;
`;

const List = styled.ul`
  display: flex;
  width: 100%;
  padding: 0px 32px;
`;
const ListText = styled(ListFont)`
  color: white;
  padding-right: 16px;
  &:hover {
    cursor: pointer;
  }
`;

const Menubar = styled.div`
  padding: 8px;
  cursor: pointer;
`;

const MenuLink = styled.div`
  padding: 8px;
  font-size: 12px;
`;

export default function HeaderSection() {
  const [isOpen, setIsOpen] = useState(false);
  function changeMenuState() {
    setIsOpen(!isOpen);
  }
  return (
    <Header>
      <Title>
        <TitleText href={`/`}>GitHub Viewer</TitleText>
      </Title>
      <List>
        <ListText href={`/issue`}>Issue</ListText>
        <ListText href={`/pull-request`}>Pull Request</ListText>
      </List>
      <MenuLink>
        <Menubar onClick={() => changeMenuState()}>
          <FaBars />
        </Menubar>
        <HamburgerMenu isOpen={isOpen} />
      </MenuLink>
    </Header>
  );
}
