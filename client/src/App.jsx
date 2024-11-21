import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './components/nav/Nav'
import Footer from './components/footer/Footer'

export default function App() {
  return (
    <>
      <Nav/>
      <div className="">
        <Outlet/>
      </div>
      <Footer/>
    </>
  )
}
