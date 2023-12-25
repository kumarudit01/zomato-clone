import { useState } from 'react'
import { createBrowserRouter, RouterProvider, Route, Link, } from "react-router-dom";
import Home from './pages/home';
import Navbar from './components/navbar';
import Login from "./pages/login";
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
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
