import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Signup from './Components/signup';
import App from "./Components/app";
import Homepage from "./Components/homepage";
import Mathematic from "./Components/mathematic";
import General from "./Components/general";
import English from "./Components/english";
import Riddle from "./Components/riddle";
import Leader from "./Components/leader";
import Instruction from "./Components/instruction";



import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";


  const router = createBrowserRouter([
    {
      path: "/signup",
      element: <Signup />,
    },
    {
        path: "/app",
        element: <App />,
    },
    {
      path: "/mathematic",
      element: <Mathematic />,
    },
    {
      path: "/english",
      element: <English />,
    },
    {
      path: "/riddle",
      element: <Riddle />,
    },
    {
      path: "/general",
      element: <General />,
    },
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/leader",
      element: <Leader />,
    },
    {
      path: "/instruction",
      element: <Instruction />,
    },
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);

reportWebVitals();
