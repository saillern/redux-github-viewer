import { React } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./features/store";
import { createHashRouter, RouterProvider } from "react-router-dom";
import IssuePage from "./components/pages/IssuePage";
import PullRequestPage from "./components/pages/PullRequestPage";
import Profile from "./components/pages/Profile";
import { IconContext } from "react-icons";
import { GlobalStyle } from "./components/pages/Layout";
import HeaderSection from "./components/organisms/HeaderSection";

const router = createHashRouter(
  [
    {
      path: "/",
      element: <HeaderSection />,
      children: [
        {
          path: "/",
          element: <App />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/issue",
          element: <IssuePage isOpen={true} />,
        },
        {
          path: "/pull-request",
          element: (
            <>
              <PullRequestPage isOpen={true} />
            </>
          ),
        },
      ],
    },
  ],
  {
    basename: "/",
  },
);

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
