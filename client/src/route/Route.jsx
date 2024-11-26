import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from '../App'
import Home from '../page/home/Home'
import Shop from '../page/shop/Shop'
import Contact from '../page/contact/Contact'
import Detail from '../page/detail/Detail'
import Cart from '../page/cart/Cart'
import Login from '../page/login/Login'
import Register from '../page/register/Register'

export default function Route() {
    const router = createBrowserRouter([
        {
            path : '/',
            element : <App/>,
            children : [
                {
                    path : '/',
                    element : <Home/>
                },
                {
                    path : '/shop',
                    element : <Shop/>
                },
                {
                    path : '/contact',
                    element : <Contact/>
                },
                {
                    path : '/detail/:id',
                    element : <Detail/>
                },
                {
                    path : '/cart',
                    element : <Cart/>
                },
                {
                    path : '/login',
                    element : <Login/>
                },
                {
                    path : '/register',
                    element : <Register/>
                }
            ]
        }
    ])
  return (
    <RouterProvider router={router}/>
  )
}
