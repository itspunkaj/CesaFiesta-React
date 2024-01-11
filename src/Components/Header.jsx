import cesaFiestaLogo from "../../public/CESA_LOGO.png"
import IITRoparLogo from "../../public/IITRopar.png"

function Header() {
  return (
    <div className="bg-gradient-to-r from-secondColor via-thirdColor to-firstColor">
      <div className="flex justify-between items-center px-[15%] py-2">
            <div className="flex justify-center items-center">
            <img className="h-24" src={cesaFiestaLogo} />
            </div>
            <div className="flex text-white flex-col justify-center items-center">
                <h3 className="text-4xl font-bold py-2">CESA FIESTA 2.0</h3>
                <h4 className="text-xl">9-10 March, 2024</h4>
                <h4 className="text-xl">Ropar, India</h4>
            </div>
            <div className="flex justify-center items-center">
            <img className="hidden md:flex h-24" src={IITRoparLogo} />
            </div>
        </div>
    </div>
  )
}

export default Header