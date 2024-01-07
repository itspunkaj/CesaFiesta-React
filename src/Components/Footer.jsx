import Iframe from "react-iframe"

export const Footer = () => {
  return (
    <div className="bg-firstColor min-h-96">
      <div className="flex flex-row ">
        <div className="basis-1/3 py-14 pl-20 text-white">
          <h2 className="text-lg font-bold mb-6">CESA FIESTA Overall Coordinator Details</h2>
          <div className="text-sm space-y-1">
            <div>Transportation Research Group of India (TRG)</div>
            <div>Dr. Akhilesh Kumar Maurya, President, TRG</div>
            <div>C/O Prof Ashish Verma, Professor</div>
            <div>Department of Civil Engineering,</div>
            <div>Indian Institute of Science</div>
            <div>Bangalore-560012, Karnataka, India</div>
            <div>Ph: +91-80-2293 2329</div>
            <div>office@trgindia.org</div>
            <div>Web: www.trgindia.org</div>
          </div>
        </div>
        <div className="basis-1/3 py-14 pl-20 text-white">
          <h2 className="text-lg font-bold mb-6">Useful Links</h2>
          <div className="text-sm space-y-1">
            <div>Transportation Research Group of India (TRG)</div>
            <div>Dr. Akhilesh Kumar Maurya, President, TRG</div>
            <div>C/O Prof Ashish Verma, Professor</div>
            <div>Department of Civil Engineering,</div>
            <div>Indian Institute of Science</div>
            <div>Bangalore-560012, Karnataka, India</div>
            <div>Ph: +91-80-2293 2329</div>
            <div>office@trgindia.org</div>
            <div>Web: www.trgindia.org</div>
          </div>
        </div>
        <div className="basis-1/3 py-14 pl-20 text-white">
          <h2 className="text-lg font-bold mb-6">Location</h2>
          <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3421.0666752199363!2d76.47073007465674!3d30.968621474195896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3905542fe45e58f7%3A0x5d16c2617cfdbdb8!2sIndian%20Institute%20Of%20Technology%E2%80%93Ropar%20(IIT%E2%80%93Ropar)!5e0!3m2!1sen!2sin!4v1704484487791!5m2!1sen!2sin" 
          width="250" height="250" allowfullscreen="" loading="lazy" />
        </div>
      </div>
      <div className="w-11/12 mx-auto border-t border-slate-500"></div>
      <div className="text-slate-600 text-sm py-4"><center>© Copyright IIT Ropar, 2024</center></div>
    </div>
  )
}