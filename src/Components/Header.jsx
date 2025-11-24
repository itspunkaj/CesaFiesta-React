import cesaFiestaLogo from "/CESA_LOGO.png";
import IITRoparLogo from "/IITRopar.png";
import { useState } from "react";
import { useEffect } from "react";
function Header() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [bgColor,setBgColor]=useState('bg-transparent');
  useEffect(() => {
      const handleScroll = () => {
          const currentScrollPos = window.scrollY;
          setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
          setPrevScrollPos(currentScrollPos);

          if (prevScrollPos > currentScrollPos) {
              setBgColor('bg-transparent'); // Change to your desired background color when scrolling up
          } else {
              setBgColor('[#ffffff]'); // Change to your desired background color when scrolling down
          }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, [prevScrollPos, visible]);
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.2" className="bg-sixthColor">
      <div className="flex justify-between items-center px-10 md:px-[15%] py-2">
        <div className="flex justify-center items-center">
          <img className="h-24" src={cesaFiestaLogo} />
        </div>
        <div className="flex text-firstColor flex-col justify-center items-center">
          <h3 className="text-[42px] font-bold leading-[46.2px] font-sans">
            CESAFIESTA 4.0
          </h3>
          <h4
            className="text-[25px] leading-[38.5px] vertical-align:baseline letter-spacing:-1.75px word-spacing:0px font-weight:600
            font-style:normal font-variant:normal text-transform:uppercase"
          >
            21-22 February, 2026
          </h4>
          <h4 className="text-xl">Ropar, India</h4>
        </div>
        <div className="flex justify-center items-center">
          <img className="hidden md:flex h-24" src={IITRoparLogo} />
        </div>
      </div>
    </div>
  );
}

export default Header;
