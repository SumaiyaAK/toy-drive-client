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
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AuthProviders from './Providers/AuthProviders';
import CarDetails from './Pages/RootPage/CarDetails/CarDetails';
import AddToy from './Pages/AddToy/AddToy';
import MyToy from './Pages/MyToy/MyToy';
import PrivateRoute from './PrivateRoute';
import Error from './Error/Error';




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
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: '/car_details',
        element: <PrivateRoute><CarDetails></CarDetails></PrivateRoute>,
        // loader: ({params}) => fetch(`http://localhost:5000/alltoys/${params.id}`)
      },
      {
        path: 'addToy/:id',
        element: <AddToy></AddToy>,
        loader: ({params}) => fetch(`http://localhost:5000/alltoys/${params.id}`)
      },
      {
        path: 'MyToy',
        element: <PrivateRoute><MyToy></MyToy></PrivateRoute>,
        
      },
      
    ]
  },
  {
    path: '/*',
    element: <Error></Error>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-screen-fit'>
    <React.StrictMode>
      <AuthProviders>
        <RouterProvider router={router} />
      </AuthProviders>
    </React.StrictMode>
  </div>
  ,
)
