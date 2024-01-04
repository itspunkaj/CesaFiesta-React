import cesaFiestaLogo from "../Images/CESA LOGO.jpeg.jpg"

function Header() {
  return (
    <div className="bg-blue-900">
      <div className="flex justify-between pl-40 pb-3 pt-3 pr-40">
            <div className="">
              <img className="h-24" src="	https://www.iitrpr.ac.in/sites/default/files/logo_0_2.png" />
            </div>
            <div className="text-center">
                <h3 className="text-4xl text-white font-bold">CESA FIESTA 2.0</h3>
                <br/>
                <h4 className="text-white text-xl">9-10 March, 2024</h4>
                <h4 className="text-white text-xl">Ropar, India</h4>
            </div>
            <div>
                <img className="h-24" src={cesaFiestaLogo} />
            </div>
        </div>
    </div>
  )
}

export default Header