/* eslint-disable react/prop-types */
import DrVVSrinivas from './VVSrinivas.jpg'
import ahsan from './ahsan.png'
import upaka from './upaka.png'
import ahsan2 from './Praveen.jpg'
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
import brig from './chunendra.jpeg'
import kaizad from './kaizad.jpeg'
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
Water Education, The ' designation='Professor' />
                 <Card imageUrl={ahsan2} link='https://civil.iitr.ac.in/CE?Uid=garg_fce' name='Prof. Praveen Kumar' college='IIT Roorkee' designation='Professor'/> 
                 <Card imageUrl={upaka} link='https://civil.iitr.ac.in/CE?Uid=umuksfce' name='Prof. Rajendra Prasad Singh' college='Southeast University, China' designation='Professor'/>
            </div>
            </center>
            
        </div>
    )
}

export default KeyNoteSpeakers