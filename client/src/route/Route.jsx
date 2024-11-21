import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from '../App'
import Home from '../page/home/Home'
import Shop from '../page/shop/Shop'
import Contact from '../page/contact/Contact'
import Detail from '../page/detail/Detail'
import Cart from '../page/cart/Cart'

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
                }
            ]
        }
    ])
  return (
    <RouterProvider router={router}/>
  )
}
