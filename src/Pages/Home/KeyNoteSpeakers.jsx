/* eslint-disable react/prop-types */
const Card = (props) => {
    return (
        <div className="flex flex-col justify-around bg-fourthColor h-auto w-[200px] border-4 border-slate-300 rounded-xl shadow-sm py-3-2">
            <center><img className='h-40' src={props.imageUrl} />
                <a className=" flex flex-col justify-around text-md text-blue-900 hover:text-blue-600" href={props.link} target="_blank" rel='noreferrer'>
                    <span className="font-bold">Prof. {props.name}</span>
                    <span>{props.college}</span>
                </a>
            </center>
        </div>
    )
}
function KeyNoteSpeakers() {
    return (
        <div className="py-[40px]">
            <h3 className="text-center text-3xl pt-8 font-semibold">Keynote Speakers</h3>
            <center><div className="w-[90%] max-w-[1100px] lg:w-[80%] grid justify-items-center grid-cols-2 md:grid-cols-4 xl:grid-cols-4 sm:grid-cols-3 md:px-0 gap-6 py-8 ">
                <Card imageUrl="http://www.civil.iisc.ac.in/wp/wp-content/uploads/2018/10/VVSrinivas.jpg" link='http://www.civil.iisc.ac.in/people/srinivas-v-v/' name='Srinivas V V' college='IISC Bangalore' />
                <Card imageUrl="https://civil.iitr.ac.in/IMG/4-RDGarg..jpg" link='https://civil.iitr.ac.in/CE?Uid=garg_fce' name='Rahul Dev Garg' college='IIT Roorkee' />
                <Card imageUrl="https://civil.iitr.ac.in/IMG/6-UmeshKumar.jpg" link='https://civil.iitr.ac.in/CE?Uid=umuksfce' name='Umesh Kumar Sharma' college='IIT Roorkee' />
                <Card imageUrl="https://www.iitbhu.ac.in/sites/default/files/styles/medium/public/pictures/2022-11/Photo.jpeg?itok=Ek7eYyMF" name='Manash Chakraborty' college='IIT BHU' />
            </div>
            </center>
        </div>
    )
}

export default KeyNoteSpeakers