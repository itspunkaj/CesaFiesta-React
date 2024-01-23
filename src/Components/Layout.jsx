import { Outlet } from "react-router-dom"
import Header from './Header'
import Navbar from "./Navbar"
import Footer from "./Footer"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"
function Layout() {
  return (
    <>
      <Header/>
      <Navbar/>
      <Outlet/>
      <Footer/>
      <Analytics/>
      <SpeedInsights/>
    </>
  )
}

export default Layout