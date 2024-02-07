/* eslint-disable react/prop-types */
import DrGanesh from './Dr_Ganesh.jpg'
import DrShray from './Dr_Shray.jpg'
const Card = (props) => {
    return (
        <div className="flex flex-col justify-around bg-white h-auto w-[200px] border-4 border-firstColor rounded-xl shadow-sm py-3">
            <center><img className="h-40" src={props.imageUrl}/>
            <br />
            <a className="flex flex-col justify-around text-md text-blue-900 hover:text-blue-600" href={props.link} target="_blank" rel='noreferrer'>
            <span className="font-bold">{props.name}</span>
            </a>
            </center>
        </div>
    )
}

function KeyNoteSpeakers() {
    return (
        <div className="bg-thirdColor">
            <h3 className="text-center text-fourthColor text-3xl pt-8 font-semibold">Faculty Organising Committee</h3>
            <center><div className="w-[90%] max-w-[1100px] lg:w-[80%] grid justify-items-center grid-cols-2 md:grid-cols-4 xl:grid-cols-4 sm:grid-cols-3 md:px-0 gap-6 py-8 ">
            <Card imageUrl="https://www.iitrpr.ac.in/civil/wp-content/uploads/2022/05/Sagar-min.jpg" name="Dr. Sagar Rohidas Chavan" link="https://www.iitrpr.ac.in/cse/sagarrohidas"/>
            <Card imageUrl="https://www.iitrpr.ac.in/civil/wp-content/uploads/2022/05/Mitesh-min.jpg" name="Dr. Mitesh Surana " link="https://sites.google.com/view/mitesh-surana"/>
            <Card imageUrl={DrShray} name="Dr. Shray Pathak" link="https://scholar.google.co.in/citations?user=JId_NPEAAAAJ&hl=en"/>
            <Card imageUrl={DrGanesh} name="Dr. Ganesh Ravi" link="https://scholar.google.com/citations?user=GYBJrXoAAAAJ&hl=en&oi=sra"/>
            </div>
            </center>
        </div>
    )
}

export default KeyNoteSpeakers