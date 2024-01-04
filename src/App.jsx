import Caraousel from "./Components/Carousel"
import Header from "./Components/Header"
import KeyNoteSpeakers from "./Components/KeyNoteSpeakers"
import Navbar from "./Components/Navbar"
function App() {
  return (
    <div>
      <Header className='z-100'/>
      <Navbar className='z-101'/>
      <Caraousel/>
      <KeyNoteSpeakers/>
    </div>
  )
}

export default App
