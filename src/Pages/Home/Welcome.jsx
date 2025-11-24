import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBullhorn } from "@fortawesome/free-solid-svg-icons"
function Welcome() {
  return (
    <div className="flex justify-center bg-fourthColor">
      <div className="w-[90%] max-w-[1100px] lg:w-[80%] my-16 h-auto min-h-[90%] grid grid-cols-12 divide-x divide-solid divide-firstColor">
        <div className="col-span-12 md:col-span-8 pr-2">
          <div className="text-3xl font-semibold">Introduction</div>
          <div className="my-10 text-lg leading-relaxed justify-center items-center text-justify">The Department of Civil Engineering at the Indian Institute of Technology 
            Ropar is all set to host the ‘Civil Engineering Student Association Fiesta’ (CESAFIESTA) for the third consecutive year on 21ᵗʰ & 22ᵗʰ February 2026. 
            This 2-day symposium is attributed to the celebration of science, innovation and research in a diverse spectrum of civil engineering. This initiative 
            connects academia with the civil engineering sector, focusing on the confluence of cutting-edge technology and sustainable construction methodologies. 
            This initiative seeks to unite researchers from diverse sectors, cultivating their talents to collectively drive the nation's progress through skill-building, 
            inventive solutions and groundbreaking innovations.
          </div>
        </div>
        <div className="col-span-12 md:col-span-4 pl-4">
          <div className="text-3xl font-semibold">Notifications</div>
          <div className="my-10 text-lg leading-relaxed">
            <div className="flex flex-row items-center hover:thirdColor ">
              <FontAwesomeIcon icon={faBullhorn} className="h-[20px] w-[20px] text-firstColor"/>
            <a className="text-firstColor font-medium hover:text-thirdColor ml-2" href='https://drive.google.com/file/d/1nYFKV734o2VLrM2vs1KL4NVHHevpm5k8/view?usp=drive_link' target='blank_'>Announcement</a>
            </div>
            <div className="flex flex-row items-center hover:thirdColor ">
              <FontAwesomeIcon icon={faBullhorn} className="h-[20px] w-[20px] text-firstColor"/>
              <a className="ml-2 text-firstColor font-medium hover:text-thirdColor" href='https://drive.google.com/file/d/1GwQp30Lp1V2STXGIFLycME6-MEk2pD_R/view?usp=drive_link' target='blank_'>Detailed Brochure</a>
            </div>   
            <div className="flex flex-row items-center hover:thirdColor ">
              <FontAwesomeIcon icon={faBullhorn} className="h-[20px] w-[20px] text-firstColor"/>
              <a className="ml-2 text-firstColor font-medium hover:text-thirdColor" href='https://drive.google.com/file/d/1bzUDaL1qaEVA8JvZajXW7ts6kvd43gS5/view?usp=drive_link' target='blank_'>Sponsorship Brochure</a>
            </div>    
           </div>   
        </div>
      </div>
    </div>
  )
}

export default Welcome