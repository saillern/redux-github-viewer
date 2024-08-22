import styled from "styled-components";
import React from "react";

const MenuBarList = styled.div`
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

const MenuBarText = styled.a`
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

export function HamburgerMenu({ isOpen }) {
  if (!isOpen) return;
  return (
    <MenuBarList>
      <MenuBarText href={`/`}>Top</MenuBarText>
      <MenuBarText href={`/profile`}>You Profile</MenuBarText>
      <MenuBarText href={`/issue`}>Issue</MenuBarText>
      <MenuBarText href={`/pull-request`}>Pull Request</MenuBarText>
    </MenuBarList>
  );
}
