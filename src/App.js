import React from "react";
import HeaderSection from "./components/organisms/HeaderPart";
import BodySection from "./components/pages/MainPage";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;  
  }
  html{
    font-family: Lato, "Lucida Grande", "Lucida Sans Unicode", Tahoma, sans-serif;
    line-height: 1.5;
    font-size: 14px;
    padding: 0px;
    margin: 0;
  }
  a{
    color: rgb(3,102,214);
    text-decration:none;
  }

  *,*:before,*:after {
    box-sizing: border-box;
  }
  li{
    list-style-type:none;
  }
  ul{
    padding:0px;
    margin:0px;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <HeaderSection />
      <BodySection />
    </>
  );
}

export default App;
