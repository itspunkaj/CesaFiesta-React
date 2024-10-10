/* eslint-disable react/prop-types */
import DrGanesh from './Dr_Ganesh.jpg'
import DrShray from './Dr_Shray.jpg'
import DrSagar from './dr_sagar.png'
import DrMitesh from './drmitesh.jpg'
import { motion } from 'framer-motion'
const Card = (props) => {
    return (
        <div className="flex flex-col justify-around bg-white h-auto w-[175px] md:w-[200px] sm:w-[180px] border-4 border-firstColor rounded-xl shadow-sm py-3">
            <center><img className="h-40" src={props.imageUrl}/>
            <br />
            <a className="flex flex-col justify-around text-md text-blue-900 hover:text-blue-600" href={props.link} target="_blank" rel='noreferrer'>
            <span className="font-bold">{props.name}</span>
            <span className="">{props.designation}</span>
            </a>
            </center>
        </div>
    )
}

function CoreTeam() {
    return (
        <div className="bg-fourthColor">
            <h3 className="text-center text-4xl pt-8 md:pt-12 font-semibold">Faculty Organising Committee</h3>
            <center><motion.div className="w-[90%] flex-row max-w-[1100px] lg:w-[80%] grid justify-items-center grid-cols-2 md:grid-cols-4 xl:grid-cols-4 sm:grid-cols-3 md:px-0 gap-6 py-8 ">
            <Card imageUrl={DrSagar} name="Dr. Sagar Rohidas Chavan" designation="Chairperson" link="https://www.iitrpr.ac.in/civilfaculty/sagarrohidas"/>
            <Card imageUrl={DrShray} name="Dr. Shray Pathak" designation="Convenor" link="https://sites.google.com/view/shraypathak"/>
            <Card imageUrl={DrGanesh} name="Dr. Ganesh Ravi" designation="Co-Convenor" link="https://sites.google.com/view/ravi-ganesh/home"/>
            <Card imageUrl="https://d3s9yd6qcwjotm.cloudfront.net/ProfileImage/6589.jpg" name="Dr. Indramani Dhada" designation="Co-Convenor" link="https://www.iitrpr.ac.in/civilfaculty/indramani-dhada"/>
            </motion.div>
            </center>
        </div>
    )
}

export default CoreTeam