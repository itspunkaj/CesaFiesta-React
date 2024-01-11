import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const navItems = [
  {
    tab: 'Home',
    path: '/',
  },
  {
    tab: 'About Us',
    path: '/about-us',
  },
  {
    tab: 'Schedule',
    path: '/schedule',
  },
  {
    tab: 'Registration/Sponsorship',
    path: '/registration',
  },
  {
    tab: 'Gallery',
    path: '/gallery',
  },
  {
    tab: 'Contact Us',
    path: '/contact-us'
  }
];


function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const closeDropdown = () => {
    setIsMenuOpen(false);
  }

  useEffect(() => {
    window.addEventListener('resize', closeDropdown);

    return () => {
      window.removeEventListener('resize', closeDropdown);
    };
  }, []);

  return (
    <div className="navbar">
      <div className="flex h-10 items-center px-2 py-1 bg-firstColor md:hidden">
        <button
          onClick={toggleMenu}
          className="text-white hover:border-2 hover:text-secondColor hover:border-secondColor hover:rounded-md "
        >
          <svg
            className="w-7 h-7"
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
      <div className="bg-firstColor top-0 z-[1000]">
        <div className={`md:flex ${isMenuOpen ? 'flex flex-col items-center space-y-4 pb-10' : 'hidden'} justify-between px-20 py-2 text-white font-md`}>
          {navItems.map((item) => <Link className='hover:underline hover:text-secondColor' key={item.tab} to={item.path}>{item.tab}</Link>)} 
        </div>
      </div>
    </div>
  )
}

export default Navbar