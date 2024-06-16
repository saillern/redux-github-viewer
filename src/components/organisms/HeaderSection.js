import React from "react";
import styled from "styled-components";
import { HeaderTitle, HeaderListText } from "../molecules/HeaderPart";
import { FaBars } from "react-icons/fa";
import { OpenHamburgerMenu } from "../molecules/HamburgerMenu";
import { handleMenuBar, openMenuState } from "../../features/Reducer";
import { useDispatch, useSelector } from "react-redux";

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
  a {
    text-decoration: none;
  }
`;

const HeaderLink = styled.a`
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

export default function HeaderSection() {
  const dispatch = useDispatch();
  const openMenu = useSelector(openMenuState);
  return (
    <HeaderFormat>
      <HeaderTitle>
        <HeaderLink href={`/`}>GitHub Viewer</HeaderLink>
      </HeaderTitle>
      <HeaderListFormat>
        <HeaderList href={`/issue`}>Issue</HeaderList>
        <HeaderList href={`/pull-request`}>Pull Request</HeaderList>
      </HeaderListFormat>
      <MenuLink>
        <Menubar onClick={() => dispatch(handleMenuBar())}>
          <FaBars />
        </Menubar>
        <OpenHamburgerMenu isOpen={openMenu} />
      </MenuLink>
    </HeaderFormat>
  );
}
