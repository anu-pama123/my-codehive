import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Components
import Home from "./Pages/Home/Home.tsx";
import About from "./Pages/About/About.tsx";
import Layout from "./Components/Layout/Layout.tsx";

import Backdrop from "@mui/material/Backdrop";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider
        fallbackElement={<Backdrop open={true} />}
        router={router}
      ></RouterProvider>
    </div>
  );
}

export default App;
