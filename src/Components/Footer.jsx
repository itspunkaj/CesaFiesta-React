import Iframe from "react-iframe"
function Footer() {
  return (
    <div className="bg-firstColor h-auto pt-8 md:pt-0">
      <div className="flex flex-col md:flex-row">
        <div className="p-10 py-2 md:pr-0 md:basis-1/3 md:py-10 md:pl-20 text-fourthColor">
          <h2 className="text-lg font-bold mb-4">CESAFIESTA Overall Coordinator</h2>
          <div className="text-sm space-y-1">
            <div>Departemnt of Civil Engineering,</div>
            <div>Indian Institute of Technology</div>
            <div>Ropar-140001, Punjab, India</div>
            <div>ce.symposium@iitrpr.ac.in</div>
            <div><a className='hover:underline' href='https://www.iitrpr.ac.in/civil/' target="blank_">www.iitrpr.ac.in/civil</a></div>
          </div>
        </div>
        <div className="p-10 py-4 md:pr-0 md:basis-1/3 md:py-10 md:pl-20 text-fourthColor">
          <h2 className="text-lg font-bold mb-4">Useful Links</h2>
          <div className="text-sm space-y-1">
            <div><a className='hover:underline hover:text-secondColor' href='https://www.iitrpr.ac.in/'>IIT Ropar</a></div>
            <div><a className='hover:underline hover:text-secondColor' href='https://www.iitrpr.ac.in/civil/'>Department Of Civil Engineering</a></div>
            <div><a className='hover:underline hover:text-secondColor' href='https://rupnagar.nic.in/'>Rupnagar</a></div>
          </div>
        </div>
        <div className="p-10 py-2 md:pr-0 md:basis-1/3 md:pt-10 md:pl-20 text-fourthColor">
          <h2 className="text-lg font-bold mb-4">Location</h2>
          <Iframe className="h-[130px] w-[300px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3421.0666752199363!2d76.47073007465674!3d30.968621474195896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3905542fe45e58f7%3A0x5d16c2617cfdbdb8!2sIndian%20Institute%20Of%20Technology%E2%80%93Ropar%20(IIT%E2%80%93Ropar)!5e0!3m2!1sen!2sin!4v1704484487791!5m2!1sen!2sin"
            allowfullscreen="" loading="lazy" />
        </div>
      </div>
      <div className="w-11/12 mx-auto border-t border-slate-500"></div>
      <div className="text-slate-400 text-sm py-2"><center>Developed by Pankaj Singh, Aditya Kandpal and Team</center></div>
    </div>
  )
}

export default Footer;