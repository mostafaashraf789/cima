import React from "react";
import { RouterProvider, createHashRouter } from "react-router-dom";

import Movies from "./component/movies/Movies";
import Series from "./component/series/Series";
import Layout from "./component/layout/Layout";

export default function App() {
  const router = createHashRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Movies /> },
        { path: "series", element: <Series /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
