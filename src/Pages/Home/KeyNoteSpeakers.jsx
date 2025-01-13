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
import rupesh from './101.png'
import siddhartha from './11.png'
import rahul from './12.jpeg'
import bhava from './13.png'
import dola from './14.png'
import brig from './15.png'
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
                <Card imageUrl={ahsan} link='http://www.civil.iisc.ac.in/people/srinivas-v-v/' name='Prof. Chris Zevenbergen' college=' IHE Delft Institute for
Water Education, The Netherlands' designation='Professor' />
                 <Card imageUrl={ahsan2} link='https://civil.iitr.ac.in/CE?Uid=garg_fce' name='Prof. Dafang Fu' college='Southeast University, China' designation='Professor'/> 
                 <Card imageUrl={upaka} link='https://civil.iitr.ac.in/CE?Uid=umuksfce' name='Prof. Rajendra Prasad Singh' college='Southeast University, China' designation='Professor'/>
                 <Card imageUrl={aparna} link='https://civil.iitr.ac.in/CE?Uid=umuksfce' name='Dr. Aparna Shukla' college='Ministry of Earth Science' designation='Scientist E'/>
                 <Card imageUrl={salim} link='https://civil.iitr.ac.in/CE?Uid=umuksfce' name='Prof. Debasis Deb' college='IIT Kharagpur' designation='Professor'/>
                 <Card imageUrl={bhava} link='https://civil.iitr.ac.in/CE?Uid=umuksfce' name='Dr. Bhavathrathan B K' college='IIT Palakkad' designation='Associate Professor'/>
                 <Card imageUrl={rahul} link='https://civil.iitr.ac.in/CE?Uid=umuksfce' name='Dr. Rahul Khanna' college='National Hydroelectric Power Corporation Ltd.' designation='General Manager (Geotech)'/>
                 <Card imageUrl={dola} link='https://civil.iitr.ac.in/CE?Uid=umuksfce' name='Ms. Dola Roychowdhury' college='G-Cube Consulting Engineers LLP' designation='Founder Director'/>
                 <Card imageUrl={unmesh} link='https://civil.iitr.ac.in/CE?Uid=umuksfce' name='Dr. Unmesh Khati' college='IIT Indore' designation='Assistant Professor'/>   
                 <Card imageUrl={anurag} link='https://civil.iitr.ac.in/CE?Uid=umuksfce' name=' Mr. Rupesh Kumar' college='Kalpataru Projects International Ltd ' designation=' Assistant Vice President'/>
                 <Card imageUrl={gandhi} link='https://civil.iitr.ac.in/CE?Uid=umuksfce' name=' Vinod Kumar Mauriya' college='NTPC-CC EOC, Hyderabad' designation='Dy. General Manager(PE-Civil)'/>
                 <Card imageUrl={rupesh} link='https://civil.iitr.ac.in/CE?Uid=umuksfce' name='Dr. Manish Pandey' college='IIT Kharagpur' designation='Assistant Professor'/>
                 <Card imageUrl={siddhartha} link='https://civil.iitr.ac.in/CE?Uid=umuksfce' name='Dr. Preeti Pal' college='' designation=' JSPS-Postdoctoral Fellow'/>
                 <Card imageUrl={brig} link='https://civil.iitr.ac.in/CE?Uid=umuksfce' name='Brigadier Jagdeep Kapoor' college=' Military Engineering Services' designation='Brigadier and CE'/>
            </div>
            </center>
            
        </div>
    )
}

export default KeyNoteSpeakers