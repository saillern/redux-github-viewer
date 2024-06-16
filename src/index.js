import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./features/Store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import IssuePage from "./components/pages/IssuePage";
import PullRequestPage from "./components/pages/PullRequestPage";
import { GlobalStyle } from "./App";
import { HeaderSection } from "./components/organisms/HeaderSection";

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
    <RouterProvider router={router} />
  </Provider>,
  document.getElementById("root"),
);
