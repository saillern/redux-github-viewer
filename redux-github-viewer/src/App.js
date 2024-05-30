import React from "react";
import HeaderSection from "./components/molecules/headerPage";
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
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <HeaderSection />
    </>
  );
}

export default App;
