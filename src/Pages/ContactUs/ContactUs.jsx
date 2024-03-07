/* eslint-disable react/prop-types */
import DrGanesh from './Dr_Ganesh.jpg'
import DrShray from './Dr_Shray.jpg'
import Bipul from './Bipul_Sharma.jpg'
import Nikhil from './Nikhil.jpg'
import Abhi from './Abhishek_Sonkar.jpg'
import Amit from './AmitKumarSingh.jpg'
import Sid from './Sidhartha_Chauhan.jpg'
import Shreya from './Shreya.jpg'
import Aarathi from './Aarathi.jpg'
import Pankaj from './Pankaj.jpg'
import drsagar from "./dr_sagar.png"
const Card = (props) => {
  return (
    <div className="bg-white h-auto w-[240px] border-4 border-firstColor rounded-xl shadow-sm py-3">
      <center><img className="h-40" src={props.imageUrl} />
        <br />
        <a className="text-black hover:text-firstColor" href={props.link} target="_blank" rel='noreferrer'>
          <div className="text-lg font-semibold pb-2">{props.name}</div>
          <div className="text-md">{props.designation}</div>
          <div className="text-md">Civil Engineering, IIT Ropar</div>
          <div className="text-md px-4">{props.email}</div>
        </a>
      </center>
    </div>
  )
}
const Card2 = (props) => {
  return (
    <div className="bg-white h-auto w-[250px] border-4 border-firstColor rounded-xl shadow-sm py-3">
      <center><img className="h-40 flex justify-center" src={props.imageUrl} />
        <br />
          <div className="text-lg font-semibold pb-2 flex justify-center">{props.name}</div>
          <div className="text-md flex justify-center">{props.designation}</div>
          <div className="text-md px-4 flex justify-center">{props.email}</div>
      </center>
    </div>
  )
}
function ContactUs() {
  return (
    <div>
      <div className="bg-fourthColor">
        <h3 className="text-center text-4xl pt-8 md:pt-12 font-semibold">Faculty Organising Committee</h3>
        <center><div className="w-[90%] max-w-[1500px] grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 md:px-0 gap-6 py-8 md:py-12 ">
          <Card imageUrl={drsagar} name="Dr. Sagar Rohidas Chavan"
            link="https://www.iitrpr.ac.in/cse/sagarrohidas" designation="Head of Department" 
            email="hodce@iitrpr.ac.in" />
          <Card imageUrl="data:image/jpeg;base64,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" name="Dr. Mitesh Surana"
            link="https://sites.google.com/view/mitesh-surana" designation="Assistant Professor"
            email="msurana@iitrpr.ac.in" />
          <Card imageUrl={DrShray} name="Dr. Shray Pathak" 
            link="https://scholar.google.co.in/citations?user=JId_NPEAAAAJ&hl=en" designation="Assistant Professor"
            email="shray.pathak@iitrpr.ac.in"/>
          <Card imageUrl={DrGanesh} name="Dr. Ganesh Ravi" 
            link="https://scholar.google.com/citations?user=GYBJrXoAAAAJ&hl=en&oi=sra" designation="Assistant Professor"
            email="ganesh@iitrpr.ac.in"/>
        </div>
        </center>
      </div>
      <div className="bg-thirdColor">
      <h3 className="text-center text-fourthColor text-4xl pt-8 md:pt-12 font-semibold">Student Organising Committee</h3>
        <center><div className="w-[90%] max-w-[1500px] grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 md:px-0 gap-6 py-8 md:py-12 ">
          <Card2 imageUrl={Bipul} name="Bipul Sharma" designation="General Secretary" 
          email="bipul.22cez0003@iitrpr.ac.in"/>
          <Card2 imageUrl={Nikhil} name="Nikhil" designation="Joint Secretary"
          email="nikhil.22cez0005@iitrpr.ac.in"/>
          <Card2 imageUrl={Abhi} name="Abhishek Sonkar" designation="Arrangement and Hospitality" 
          email="abhishek.22cez0004@iitrpr.ac.in"/>
          <Card2 imageUrl={Amit} name="Amit Kumar Singh" designation="Sponsorship"
          email="amit.19cez0016@iitrpr.ac.in" />
          <Card2 imageUrl={Sid} name="Siddharth Chauhan" designation="Technical" 
          email="2018cez0002@iitrpr.ac.in"/>
          <Card2 imageUrl={Shreya} name="Shreya Ganguly" designation="Content"
          email="shreya.19cez0011@iitrpr.ac.in"/>
          <Card2 imageUrl={Aarathi} name="Aarathi Shylu" designation="Cultural" 
          email="aarathi.21cez0009@iitrpr.ac.in"/>
          <Card2 imageUrl={Pankaj} name="Pankaj Singh" designation="Web Development"
          email="2021ceb1026@iitrpr.ac.in" />
        </div>
        </center>
      </div>
    </div>
  )
}

export default ContactUs