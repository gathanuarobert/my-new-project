import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './Pages/Home';
import About from './Pages/About';
import Explore from './Pages/Explore';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  }, 
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/recipes",
    element: <Explore />
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
  
);


