import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./features/Store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import IssuePage from "./components/pages/IssuePage";
import PullRequestPage from "./components/pages/PullRequestPage";
import { IconContext } from "react-icons";
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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "issue",
    element: <IssuePage />,
  },
  {
    path: "pull-request",
    element: <PullRequestPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <IconContext.Provider value={{ color: "white", size: "1.2rem" }}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </IconContext.Provider>
  </Provider>,
  document.getElementById("root"),
);
