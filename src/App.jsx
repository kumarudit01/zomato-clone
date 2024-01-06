import { useState } from 'react'
import { createBrowserRouter, RouterProvider, Route, Link, } from "react-router-dom";
import Home from './pages/home';
import Navbar from './components/navbar';
import Login from "./pages/login";
import Register from "./pages/register"
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

export default App
