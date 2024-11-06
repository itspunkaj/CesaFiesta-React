/* eslint-disable react/prop-types */
import DrVVSrinivas from './VVSrinivas.jpg'
import ahsan from './ahsan.png'
import upaka from './upaka.png'
import ahsan2 from './ahsan2.png'
import salim from  './4.png'
import sujata from './5.png'
import aparna from './6.png'
import anurag from './7.png'
import gandhi from './8.png'
import unmesh from './9.png'
import rupesh from './10.png'
import siddhartha from './11.png'
import rahul from './12.png'
import bhava from './13.png'
import dola from './14.png'
const Card = (props) => {
    return (
        <div className="flex flex-col bg-fourthColor h-auto min-h-64 w-[175px] sm:w-[180px] lg:w-[200px] border-4 border-firstColor rounded-xl shadow-sm py-3-2">
            <div className='justify-center mt-5'>
                <img className='h-40 w-30' src={props.imageUrl} />
            </div>    
                <div className="mt-5 flex flex-col text-[12px] text-blue-900 hover:text-blue-600" >
                    <span className="font-bold">{props.name}</span>
                    <span>{props.designation}, {props.college}</span>
                </div>
        </div>
    )
}
function KeyNoteSpeakers() {
    return (
        <div className="py-4 ">
            <h3 className="text-center text-3xl  font-bold">Keynote Speakers</h3>
            <center><div className="w-[90%] max-w-[1100px] lg:w-[80%] grid justify-items-center grid-cols-2 md:grid-cols-4 xl:grid-cols-5 sm:grid-cols-3 md:px-0 gap-6 py-8 ">
                <Card imageUrl={ahsan} link='http://www.civil.iisc.ac.in/people/srinivas-v-v/' name='' college=' ' designation='' />
                <Card imageUrl={upaka} link='https://civil.iitr.ac.in/CE?Uid=garg_fce' name='Prof. Upaka Rathnayake' college='Atlantic Technological University, Ireland' designation='Professor'/>
                <Card imageUrl={ahsan2} link='https://civil.iitr.ac.in/CE?Uid=umuksfce' name='Dr. Ahsan Habib' college='Dalhousie University, Canada' designation='Professor'/>
                <Card imageUrl={salim} link='https://civil.iitr.ac.in/CE?Uid=umuksfce' name='Dr. Salim Barbhuiya' college='University of East London' designation='Senior Lecturer'/>
                <Card imageUrl={sujata} link='https://civil.iitr.ac.in/CE?Uid=umuksfce' name='Dr. Sujata Goswami' college='Berkeley Lab, USA' designation='Lead Engineer'/>
                <Card imageUrl={aparna} link='https://civil.iitr.ac.in/CE?Uid=umuksfce' name='Dr. Aparna Shukla' college='Ministry of Earth Science' designation='Scientist E'/>
                <Card imageUrl={anurag} link='https://civil.iitr.ac.in/CE?Uid=umuksfce' name='Prof. Anurag Ohri' college='IIT BHU' designation='Professor'/>
                <Card imageUrl={gandhi} link='https://civil.iitr.ac.in/CE?Uid=umuksfce' name='Prof. SR Gandhi' college='IIT Gandhinagar' designation='Visiting Professor'/>
                <Card imageUrl={unmesh} link='https://civil.iitr.ac.in/CE?Uid=umuksfce' name='Dr. Unmesh Khati' college='IIT Indore' designation='Assistant Professor'/>
                <Card imageUrl={rupesh} link='https://civil.iitr.ac.in/CE?Uid=umuksfce' name='Mr. Rupesh Kumar' college='Kalpataru Projects International Ltd' designation='Assistant Vice President'/>
                <Card imageUrl={siddhartha} link='https://civil.iitr.ac.in/CE?Uid=umuksfce' name='Dr. Siddhartha Khare' college='IIT Roorkee' designation='Assistant Professor'/>
                <Card imageUrl={rahul} link='https://civil.iitr.ac.in/CE?Uid=umuksfce' name='Dr. Rahul Khanna' college='National Hydroelectric Power Corporation Ltd.' designation='General Manager (Geotech)'/>
                <Card imageUrl={dola} link='https://civil.iitr.ac.in/CE?Uid=umuksfce' name='Ms. Dola Roychowdhury' college='G-Cube Consulting Engineers LLP' designation='Founder Director'/>
            </div>
            </center>
            
        </div>
    )
}

export default KeyNoteSpeakers