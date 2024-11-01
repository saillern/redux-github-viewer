import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { HamburgerMenu } from "../molecules/HamburgerMenu";
import { useState } from "react";

const Header = styled.div`
  a {
    text-decoration: none;
  }
  display: flex;
  padding: 16px;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  background: rgb(51, 51, 51);
  color: white;
`;

const Title = styled.a`
  white-space: nowrap;
  color: white;
  &:hover {
    cursor: pointer;
  }
`;

const TitleText = styled.h1`
  white-space: nowrap;
`;

const List = styled.ul`
  display: flex;
  width: 100%;
  padding: 0px 32px;
`;
const ListText = styled.li`
  margin-right: 16px;
`;
const Text = styled.a`
  font-size: 1.1rem;
  color: white;
  &:hover {
    cursor: pointer;
  }
`;

const Menubar = styled.div`
  cursor: pointer;
`;

const MenuLink = styled.div`
  font-size: 1.2rem;
`;

export default function HeaderSection() {
  const [isOpen, setIsOpen] = useState(false);
  function changeMenuState() {
    setIsOpen(!isOpen);
  }
  return (
    <Header>
      <Title>
        <TitleText href={`/`}>Github Viewer</TitleText>
      </Title>
      <List>
        <ListText>
          <Text href={`/issue`}>Issue</Text>
        </ListText>
        <ListText>
          <Text href={`/pull-request`}>Pull Request</Text>
        </ListText>
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
