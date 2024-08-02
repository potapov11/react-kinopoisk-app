import React from "react";
import "./index.css";
import App from "./App";
import Home from "./pages/Home/Home";
import FavoritePage from "./pages/FavoritePage/FavoritePage";
import MediaPage from "./pages/MediaPage/MediaPage";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { MovieDataContext } from "./components/context";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "FavoritePage",
        element: <FavoritePage />,
      },
      {
        path: "MediaPage",
        element: <MediaPage />,
      },
    ],
  },
]);

console.log(router, "....router");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MovieDataContext>
      <RouterProvider router={router} />
    </MovieDataContext>
  </React.StrictMode>
);
