import React from "react";
import { useState } from "react";
import HeaderSection from "./components/organisms/headerPage";
import TabSection from "./components/organisms/organismsParts";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html{
    font-family: 'Lato', 'Lucida Grande', "Lucida Sans Unicode", Tahoma, Sans-Serif;
    line-height: 1.5;
    font-size: 14px;
    padding: 0px;
    margin: 0px;
  };
  a{
    color: rgb(3,102,214);
    text-decration:none;
  };
  *,*:before,*:after {
    box-sizing: border-box;
  };
  li{
    list-style-type:none;
  };
  ul{
    padding:0px;
    margin:0px;
  }
`;

function App() {
  const [openMenu, setopenMenu] = useState(false);
  function MenubarClick() {
    setopenMenu(!openMenu);
  }
  return (
    <>
      <GlobalStyle />
      <HeaderSection openMenu={openMenu} MenubarClick={MenubarClick} />
      <TabSection />
    </>
  );
}

export default App;
