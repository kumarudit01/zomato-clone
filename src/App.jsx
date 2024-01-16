import { useState } from 'react'
import { createBrowserRouter, RouterProvider, Route, Link, } from "react-router-dom";
import Home from './pages/home';
import Navbar from './components/navbar';
import Login from "./pages/login";
import Register from "./pages/register";
import Collection from './pages/collection';
import Service from './components/service';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/service',
    element: <Service />
  },
  {
    path: '/collection',
    element: <Collection />
  }
]);

function App() {

  return (
    <>
      <div className='top'>
        <Navbar />
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App;
