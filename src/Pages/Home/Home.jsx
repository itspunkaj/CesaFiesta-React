import Carousel from "./Carousel"
import CoreTeam from "./CoreTeam"
// import KeyNoteSpeakers from "./KeyNoteSpeakers"
import Welcome from "./Welcome"

function Home() {
  return (
    <>
      <Carousel/>
      <Welcome/>
      {/* <KeyNoteSpeakers/> */}
      <CoreTeam/>
    </>
  )
}

export default Home