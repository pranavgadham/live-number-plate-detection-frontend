import React, { useRef } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./display/Home.jsx";
import DetailPage from "./display/DetailPage.jsx";
import SearchPage from "./display/SearchPage.jsx";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/detail", element: <DetailPage /> },
    { path: "/search", element: <SearchPage /> },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
