import { Outlet } from "react-router-dom"
import Header from './Header'
import Navbar from "./Navbar"
import Footer from "./Footer"

function Layout() {
  return (
    <>
      <Header/>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout