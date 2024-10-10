/* eslint-disable react/prop-types */
import DrGanesh from './Dr_Ganesh.jpg'
import DrShray from './Dr_Shray.jpg'
import Bipul from './Bipul_Sharma.jpg'
import Abhi from './Abhishek_Sonkar.jpg'
import Shreya from './Shreya.jpg'
import Aarathi from './Aarathi.jpg'
import drsagar from "./dr_sagar.png"
import Tanisha from "./Tanisha.jpg"
import Amit from "./Amit.jpg"
import Aditya from "./Aditya.jpeg"
import Saroj from "./Saroj.jpg"
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
    <div className="bg-white h-auto w-[270px] border-4 border-firstColor rounded-xl shadow-sm py-3">
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
            link="https://www.iitrpr.ac.in/civilfaculty/sagarrohidas" designation="Head of Department" 
            email="hodce@iitrpr.ac.in" />
          <Card imageUrl={DrShray} name="Dr. Shray Pathak" 
            link="https://sites.google.com/view/shraypathak" designation="Assistant Professor"
            email="shray.pathak@iitrpr.ac.in"/>
          <Card imageUrl={DrGanesh} name="Dr. Ganesh Ravi" 
            link="https://sites.google.com/view/ravi-ganesh/home" designation="Assistant Professor"
            email="ganesh@iitrpr.ac.in"/>
          <Card imageUrl="https://d3s9yd6qcwjotm.cloudfront.net/ProfileImage/6589.jpg" name="Dr. Indramani Dhada" 
            link="https://www.iitrpr.ac.in/civilfaculty/indramani-dhada" designation="Assistant Professor"
            email="idhada@iitrpr.ac.in"/>  
        </div>
        </center>
      </div>
      <div className="bg-thirdColor">
      <h3 className="text-center text-fourthColor text-4xl pt-8 md:pt-12 font-semibold">Student Organising Committee</h3>
        <center><div className="w-[90%] max-w-[1500px] grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 md:px-0 gap-6 py-8 md:py-12 ">
          <Card2 imageUrl={Bipul} name="Bipul Sharma" designation="Advisor" 
          email="bipul.22cez0003@iitrpr.ac.in"/>
          <Card2 imageUrl={Abhi} name="Abhishek Sonkar" designation="General Secretary"
          email="abhishek.22cez0004@iitrpr.ac.in"/>
          <Card2 imageUrl={Amit} name="Amit Kumar" designation="Arrangement and Hospitality" 
          email="amit.20cez0003@iitrpr.ac.in"/>
          <Card2 imageUrl={Tanisha} name="Tanisha Ghosh" designation="Content" 
          email="tanisha.20cez0009@iitrpr.ac.in"/>
          <Card2 imageUrl={Saroj} name="Saroj Rana" designation="Sponsorship"
          email="saroj.20cez0006@iitrpr.ac.in" />
          <Card2 imageUrl={Shreya} name="Shreya Ganguly" designation="Technical"
          email="shreya.19cez0011@iitrpr.ac.in"/>
          <Card2 imageUrl={Aarathi} name="Aarathi Shylu" designation="Cultural" 
          email="aarathi.21cez0009@iitrpr.ac.in"/>
          <Card2 imageUrl={Aditya} name="Aditya Kandpal" designation="Web Development"
          email="2021ceb1004@iitrpr.ac.in" />
        </div>
        </center>
      </div>
    </div>
  )
}

export default ContactUs