import React, { useContext } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from '../App'
import Home from '../page/home/Home'
import Shop from '../page/shop/Shop'
import Contact from '../page/contact/Contact'
import Detail from '../page/detail/Detail'
import Cart from '../page/cart/Cart'
import Login from '../page/login/Login'
import Register from '../page/register/Register'
import { AuthContext } from '../context/AuthContext'
import Error from '../components/404/error'

export default function Route() {
    const {user} = useContext(AuthContext)
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
                    element : user ? <Detail/> : <Login/>
                },
                {
                    path : '/cart',
                    element : <Cart/>
                },
                {
                    path : '/login',
                    element : !user && <Login/>
                },
                {
                    path : '/register',
                    element : !user &&<Register/>
                },
                {
                    path : '*',
                    element : <Error/>
                }
                
            ]
        }
    ])
  return (
    <RouterProvider router={router}/>
  )
}
