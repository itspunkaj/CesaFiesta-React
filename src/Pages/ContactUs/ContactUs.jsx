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
          <Card imageUrl="https://www.iitrpr.ac.in/civil/wp-content/uploads/2022/05/Sagar-min.jpg" name="Dr. Sagar Rohidas Chavan"
            link="https://www.iitrpr.ac.in/cse/sagarrohidas" designation="Head of Department" 
            email="hodce@iitrpr.ac.in" />
          <Card imageUrl="https://www.iitrpr.ac.in/civil/wp-content/uploads/2022/05/Mitesh-min.jpg" name="Dr. Mitesh Surana"
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