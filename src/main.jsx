import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Main from './MainLayout/Main.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/RootPage/Home/Home';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>

      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-full mx-auto'>
    <React.StrictMode >
      <RouterProvider router={router} />
    </React.StrictMode>
  </div>,
)
