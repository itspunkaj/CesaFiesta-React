import Caraousel from "./Components/Carousel"
import CoreTeam from "./Components/CoreTeam"
import { Footer } from "./Components/Footer"
import Header from "./Components/Header"
import KeyNoteSpeakers from "./Components/KeyNoteSpeakers"
import Navbar from "./Components/Navbar"
function App() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Caraousel/>
      <KeyNoteSpeakers/>
      <CoreTeam/>
      <Footer/>
    </div>
  )
}

export default App
