import cesaFiestaLogo from "../Images/CESA_LOGO.png"
import IITRoparLogo from "../Images/IIT Ropar Logo.jpg"

function Header() {
  return (
    <div className="bg-firstColor">
      <div className="flex justify-between items-center px-64 sm:px-20 py-2">
            <div className="flex justify-center items-center">
              <img className="h-24" src={IITRoparLogo} />
            </div>
            <div className="flex flex-col justify-center items-center">
                <h3 className="text-4xl text-white font-bold py-2">CESA FIESTA 2.0</h3>
                <h4 className="text-white text-xl">9-10 March, 2024</h4>
                <h4 className="text-white text-xl">Ropar, India</h4>
            </div>
            <div className="flex justify-center items-center">
                <img className="h-24" src={cesaFiestaLogo} />
            </div>
        </div>
    </div>
  )
}

export default Header