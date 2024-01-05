import cesaFiestaLogo from "../Images/CESA LOGO.jpeg.jpg"

function Header() {
  return (
    <div className="bg-blue-900">
      <div className="flex justify-between items-center px-20 py-2">
            <div className="flex justify-center items-center">
              <img className="h-24" src="	https://www.iitrpr.ac.in/sites/default/files/logo_0_2.png" />
            </div>
            <div className="flex flex-col justify-center items-center">
                <h3 className="text-4xl text-white font-bold">CESA FIESTA 2.0</h3>
                <br/>
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