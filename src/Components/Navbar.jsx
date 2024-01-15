import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const tabs = [
 {
  id : 'home',
  label : 'Home',
  to : '/'
 },
 {
  id : 'about',
  label : 'About',
  subItems : [
    { id : 'iit-ropar', label : 'IIT Ropar', to : '/about/iit-ropar'},
    { id : 'department-of-civil', label : 'Department Of Civil Engineering', to : '/about/department-of-civil'},
    { id : 'ropar', label : 'Ropar', to : '/about/Ropar'}
  ]
 },
 {
  id : 'abstract',
  label : 'Abstract',
  subItems : [
    { id : 'guidelines', label : 'Guidelines', to : '/abstract/guidelines'},
    { id : 'submission', label : 'Submissions', to : 'https://docs.google.com/forms/d/e/1FAIpQLSe9St5TCyBjTqcldqnxohiIUT3zXZJLYywklaE0G5NQbHoomQ/viewform'}
  ]
 },
 {
  id : 'themes',
  label : 'Themes',
  subItems : [
    { id : 'structure', label : 'Structure', to : '/themes/structure'},
    { id : 'geotech', label : 'GeoTech', to : '/themes/geotech'},
    { id : 'transportation', label : 'Transportation', to : '/themes/transportation'},
    { id : 'geomatics', label : 'Geomatics', to : '/themes/geomatics'},
    { id : 'environment', label : 'Environment', to : '/themes/environment'},
    { id : 'water-resources', label : 'Water Resources', to :'/themes/water-resources'}
  ]
 },
 {
  id : 'cesa-fiesta1.0',
  label : 'CESA FIESTA 1.0',
  to : '/cesa-fiesta-1.0'
 },
 {
  id : 'important-dates',
  label : 'Important Dates',
  to : '/important-dates'
 },
 {
  id : 'registration',
  label : 'Registration',
  to : '/registration',
 },
 {
  id : 'contact-us',
  label : 'Contact Us',
  to : '/contact-us'
 }
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredTab, setHoveredTab] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeDropdown = () => {
    setIsMenuOpen(false);
  };

  const handleTabHover = (tabId) => {
    setHoveredTab(tabId);
  };

  const handleTabLeave = () => {
    setHoveredTab(null);
  };

  useEffect(() => {
    window.addEventListener("resize", closeDropdown);

    return () => {
      window.removeEventListener("resize", closeDropdown);
    };
  }, []);

  return (
    <div className="navbar">
      <div className="flex h-10 items-center px-2 py-1 bg-firstColor md:hidden">
        <button
          onClick={toggleMenu}
          className="text-fourthColor hover:border-2 hover:text-secondColor hover:border-secondColor hover:rounded-md "
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
      <div className={`bg-firstColor top-0 z-[1000] md:flex ${isMenuOpen ? 'flex flex-col items-center space-y-4 pb-10' : 'hidden'} justify-between px-4 md:px-20 text-fourthColor font-md`}>
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`relative cursor-pointer group py-2`}
            onMouseEnter={() => handleTabHover(tab.id)}
            onMouseLeave={handleTabLeave}
          >
            {tab.to && tab.to.startsWith && tab.to.startsWith('http') ? (
              <a href={tab.to} target="_blank" rel="noopener noreferrer">
                {tab.label}
              </a>
            ) : (
              <Link
                className={`hover:underline hover:text-secondColor flex items-center justify-center ${hoveredTab === tab.id ? 'underline text-secondColor':''}`}
                to={tab.to}
              >
                {tab.label}
              </Link>
            )}
            {tab.subItems && hoveredTab === tab.id && (
              <div className="md:left-0 md:top-full bg-gray-600  p-2 w-screen md:absolute md:w-64">
                {tab.subItems.map((subItem) => (
                  <div key={subItem.id}>
                    {subItem.to && subItem.to.startsWith && subItem.to.startsWith('http') ? (
                      <a
                        className="block py-2 px-4 hover:bg-thirdColor"
                        href={subItem.to}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {subItem.label}
                      </a>
                    ) : (
                      <Link
                        to={subItem.to}
                        className="block py-2 px-4 hover:bg-thirdColor"
                        onClick = {closeDropdown}
                      >
                        {subItem.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
