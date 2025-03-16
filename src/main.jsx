import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './components/Login/Login.jsx'

//Configurando routers

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from './components/SignUp/SignUp.jsx'
import Home from './components/Home/Home.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <SignUp />
  },
  {
    path: "/home",
    element: <Home />
  }]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
