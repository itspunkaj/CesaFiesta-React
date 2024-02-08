/* eslint-disable react/prop-types */
import DrVVSrinivas from './VVSrinivas.jpg'


const Card = (props) => {
    return (
        <div className="flex flex-col justify-around bg-fourthColor h-auto min-h-64 w-[175px] sm:w-[180px] lg:w-[200px] border-4 border-firstColor rounded-xl shadow-sm py-3-2">
            <center><img className='max-h-40' src={props.imageUrl} />
                <a className=" flex flex-col justify-around text-md text-blue-900 hover:text-blue-600" href={props.link} target="_blank" rel='noreferrer'>
                    <span className="font-bold">{props.name}</span>
                    <span>{props.college}</span>
                </a>
            </center>
        </div>
    )
}
function KeyNoteSpeakers() {
    return (
        <div className="py-[40px]">
            <h3 className="text-center text-3xl pt-8 font-bold">Keynote Speakers</h3>
            <center><div className="w-[90%] max-w-[1100px] lg:w-[80%] grid justify-items-center grid-cols-2 md:grid-cols-4 xl:grid-cols-5 sm:grid-cols-3 md:px-0 gap-6 py-8 ">
                <Card imageUrl={DrVVSrinivas} link='http://www.civil.iisc.ac.in/people/srinivas-v-v/' name='Prof. Srinivas V V' college='IISC Bangalore' />
                <Card imageUrl="https://civil.iitr.ac.in/IMG/4-RDGarg..jpg" link='https://civil.iitr.ac.in/CE?Uid=garg_fce' name='Prof. Rahul Dev Garg' college='IIT Roorkee' />
                <Card imageUrl="https://civil.iitr.ac.in/IMG/6-UmeshKumar.jpg" link='https://civil.iitr.ac.in/CE?Uid=umuksfce' name='Prof. Umesh Kumar Sharma' college='IIT Roorkee' />
                <Card imageUrl="https://www.iitbhu.ac.in/sites/default/files/styles/medium/public/pictures/2022-11/Photo.jpeg?itok=Ek7eYyMF" name='Dr. Manash Chakraborty' college='IIT BHU' />
                <Card name='To be Updated Soon...'/>
            </div>
            </center>
        </div>
    )
}

export default KeyNoteSpeakers