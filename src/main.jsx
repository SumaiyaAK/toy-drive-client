import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Main from './MainLayout/Main.jsx';
import Home from './Pages/RootPage/Home/Home';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Blog from './Pages/Blog/Blog';
import AllToys from './Pages/AllToys/AllToys';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>

      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: 'alltoys',
        element: <AllToys></AllToys>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className=''>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
    </div>
  ,
)
