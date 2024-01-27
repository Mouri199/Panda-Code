import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import MainBody from './Components/MainBody';
import Home from './Components/Home/Home';
import InternServices from './Components/Home/InternServices';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainBody></MainBody>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/intern',
        element: <InternServices></InternServices>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
