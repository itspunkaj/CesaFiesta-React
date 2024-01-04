
function Navbar() {
  return (
    <div className="bg-sky-500 sticky top-0">
        <div className="flex justify-between pl-40 pb-3 pt-3 pr-40">
            <a href="home.html" className="text-white text-xl" >Home</a>
            <a href="aboutUs.html" className="text-white text-xl">About Us</a>
            <a href="schedule.html" className="text-white text-xl">Schedule</a>
            <a href="registration.html" className="text-white text-xl">Registration/Sponsorship</a>
            <a href="gallery.html" className="text-white text-xl">Gallery</a>
            <a href="conatctUs.html" className="text-white text-xl">Contact Us</a>
        </div>
    </div>
  )
}

export default Navbar