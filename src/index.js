import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./features/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import IssuePage from "./components/pages/IssuePage";
import PullRequestPage from "./components/pages/PullRequestPage";
import Profile from "./components/pages/Profile";
import { IconContext } from "react-icons";
import { GlobalStyle } from "./components/pages/Layout";
import HeaderSection from "./components/organisms/HeaderSection";

const router = createBrowserRouter([
  {
    path: "/redux-github-viewer/",
    element: <App />,
  },
  {
    path: "/redux-github-viewer/profile",
    element: <Profile />,
  },
  {
    path: "/redux-github-viewer/issue",
    element: <IssuePage isOpen={true} />,
  },
  {
    path: "/redux-github-viewer/pull-request",
    element: (
      <>
        <PullRequestPage isOpen={true} />
      </>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <IconContext.Provider value={{ color: "white", size: "1.2rem" }}>
      <GlobalStyle />
      <HeaderSection />
      <RouterProvider router={router} />
    </IconContext.Provider>
  </Provider>,
  document.getElementById("root"),
);
