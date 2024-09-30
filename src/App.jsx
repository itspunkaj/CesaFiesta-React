import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home/Home"
import Layout from "./Components/Layout"
import Gallery from "./Pages/Gallery/Gallery"
import Schedule from "./Pages/Schedule/Schedule"
import Registration from "./Pages/Registration/Registration"
import ContactUs from "./Pages/ContactUs/ContactUs"
import IITRopar from "./Pages/AboutUs/IITRopar"
import Ropar from "./Pages/AboutUs/Ropar"
import CivilDep from "./Pages/AboutUs/CivilDep"
import Guidelines from "./Pages/Abstract/Guidelines"
import Structure from "./Pages/Themes/Structure"
import Geotech from "./Pages/Themes/Geotech"
import Transportation from "./Pages/Themes/Transportation"
import WaterResource from "./Pages/Themes/WaterResource"
import Environment from "./Pages/Themes/Environment"
import Geomatics from "./Pages/Themes/Geomatics"
import ImportantDates from "./Pages/ImportantDates/ImportantDates"
import KeyNoteSpeakers from "./Pages/Home/KeyNoteSpeakers"
import Gallery2 from "./Pages/Gallery/Gallery2"
function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index  element={<Home/>}/>
          <Route path='about/iit-ropar' element={<IITRopar/>}/>
          <Route path='department-of-civil' element={<CivilDep/>}/>
          <Route path='about/ropar' element={<Ropar/>}/>
          <Route path='keynote-speakers' element={<KeyNoteSpeakers/>}/>
          <Route path='abstract/guidelines' element={<Guidelines/>}/>
          <Route path='themes/structure' element={<Structure/>}/>
          <Route path='themes/geotech' element={<Geotech/>}/>
          <Route path='themes/transportation' element={<Transportation/>}/>
          <Route path='themes/water-resources' element={<WaterResource/>}/>
          <Route path='themes/environment' element={<Environment/>}/>
          <Route path='themes/geomatics' element={<Geomatics/>}/>
          <Route path='important-dates' element={<ImportantDates/>}/>
          <Route path='schedule' element={<Schedule/>}/>
          <Route path='cesa-fiesta-1.0' element={<Gallery/>}/>
          <Route path='cesa-fiesta-2.0' element={<Gallery2/>}/>
          <Route path='registration' element={<Registration/>}/>
          <Route path='contact-us' element={<ContactUs/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
  )
}

export default App
