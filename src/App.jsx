import LocomotiveScroll from "./Components/LocomotiveScroll"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home/Home"
import Layout from "./Components/Layout"
import Gallery from "./Pages/Gallery/Gallery"
import AboutUs from "./Pages/AboutUs/AboutUs"
import Schedule from "./Pages/Schedule/schedule"
import Registration from "./Pages/Registration/Registration"
import ContactUs from "./Pages/ContactUs/ContactUs"

function App() {
  return (
    <LocomotiveScroll>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index  element={<Home/>}/>
          <Route path='about-us' element={<AboutUs/>}/>
          <Route path='schedule' element={<Schedule/>}/>
          <Route path='gallery' element={<Gallery/>}/>
          <Route path='registration' element={<Registration/>}/>
          <Route path='contact-us' element={<ContactUs/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </LocomotiveScroll>
  )
}

export default App
