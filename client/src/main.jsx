import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import RootLayout from "./RootLayout";
import PlayersPage from "./pages/PlayersPage/PlayersPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <h1>Error</h1>,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/players", element: <PlayersPage/> },
      { path: "/teams", element: <h1>Teams</h1> },
      { path: "/projections", element: <h1>Projections</h1> },
      { path: "/about", element: <h1>About</h1> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
