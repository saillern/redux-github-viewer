import React from "react";
import styled from "styled-components";
import { HeaderTitle, HeaderListText } from "../molecules/Header";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons";

const HeaderFormat = styled.div`
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

const HeaderListFormat = styled.ul`
  display: flex;
  width: 100%;
  padding: 0px 32px;
`;

const HeaderList = styled(HeaderListText)`
  padding-right: 16px;
`;

const Menubar = styled.div`
  padding: 8px;
  cursor: pointer;
`;

const MenuLink = styled.div`
  padding: 8px;
  font-size: 12px;
`;

const MenubarList = styled.div`
  position: absolute;
  margin-top: 16px;
  right: 16px;
  width: 200px;
  border-radius: 2px;
  padding: 8px 0px;
  background: white;
  color: rgb(51, 51, 51);
  box-shadow: rgba(51, 51, 51, 0.15) 1px 1px 4px 1px;
`;

const MenubarText = styled.a`
  display: block;
  color: rgb(51, 51, 51);
  padding: 8px;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    background: rgb(3, 102, 214);
    color: white;
  }
`;
const MENU_LIST = {
  MOVE_TOP: "Top",
  MOVE_PROFILE: "Your Profile",
  MOVE_ISSUE: "Issue",
  MOVE_PULLREQUEST: "Pull Request",
};

function OpenMenubar({ IsOpen }) {
  if (IsOpen) {
    const menu = Object.values(MENU_LIST);
    return (
      <MenubarList>
        {menu.map((text) => {
          console.log(text);
          return <MenubarText>{text}</MenubarText>;
        })}
      </MenubarList>
    );
  } else {
    return;
  }
}
export default function HeaderSection({ openMenu, MenubarClick }) {
  return (
    <HeaderFormat>
      <HeaderTitle>GitHub Viewer</HeaderTitle>
      <HeaderListFormat>
        <HeaderList>Issue</HeaderList>
        <HeaderList>Pull Request</HeaderList>
      </HeaderListFormat>
      <MenuLink>
        <IconContext.Provider value={{ color: "white", size: "1.2rem" }}>
          <Menubar onClick={MenubarClick}>
            <FaBars />
          </Menubar>
          <OpenMenubar IsOpen={openMenu} />
        </IconContext.Provider>
      </MenuLink>
    </HeaderFormat>
  );
}
