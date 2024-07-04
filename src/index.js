import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./features/Store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import IssuePage from "./components/pages/IssuePage";
import PullRequestPage from "./components/pages/PullRequestPage";
import { IconContext } from "react-icons";
import { GlobalStyle } from "./components/pages/Layout";
import HeaderSection from "./components/organisms/HeaderSection";

//Headerを共有する形で書く
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
    element: (
      <>
        <HeaderSection />
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
      <RouterProvider router={router} />
    </IconContext.Provider>
  </Provider>,
  document.getElementById("root"),
);
