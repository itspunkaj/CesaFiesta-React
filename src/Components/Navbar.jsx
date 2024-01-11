import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const closeDropdown = () => {
    setIsMenuOpen(false);
  }

  useEffect(()=>{
    window.addEventListener('resize',closeDropdown);

    return () => {
      window.removeEventListener('resize',closeDropdown);
    };
  },[]);

  return (
    <>
      <div className="bg-sky-600 lg:hidden">
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
      <div className="navbar bg-sky-600 top-0 z-[1000]">
        <div className={`lg:flex ${
            isMenuOpen ? 'flex flex-col items-center space-y-4 pb-10' : 'hidden'
          } justify-between px-20 py-2 text-white font-md`}>
          <Link to="/">Home</Link>
          <Link to="/about-us">About Us</Link>
          <Link to="/schedule">Schedule</Link>
          <Link to="/registration">Registration/Sponsorship</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact-us">Contact Us</Link>
        </div>
      </div>
    </>
  )
}

export default Navbar