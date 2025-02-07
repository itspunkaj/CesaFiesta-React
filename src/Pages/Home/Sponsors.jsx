import allterra from "./allterra.jpeg"
import awadh from './awadh.jpeg'
import ushta from './ushta.jpeg'
import zen from './zen.png'
import ae from './ae.jpg'
import perkin from './perkin.jpeg'
import isrs from './isrs.jpg'
import finite from './finite.jpeg'
import mass from './mass.jpeg'
import g from './g.jpeg'
import { motion } from "framer-motion"
import jal from './jal.jpeg'
import aarica from './aarica.jpeg'
import aimil from './aimil.jpeg'
import csi from './csi.jpeg'
import sbi from './sbi.jpg'
import heico from './heico.png'
function Sponsors() {
    return (
        <>
            <div className="bg-thirdColor pb-8">
                <div className="text-center text-4xl pt-8 md:pt-12 font-semibold text-fourthColor">
                   Sponsors
                </div>
                <div className="text-2xl text-center pt-8  text-fourthColor">
                    TITLE SPONSOR
                    <div className="mt-3 flex justify-center items-center"><div className="relative left-[42px] bg-white rounded-full h-[10px] w-[10px]"></div><hr className="rounded-full w-20" /></div>
                    <center><div className="w-[90%] max-w-[1100px] lg:w-[80%] py-8 ">
                        <div ><img className="h-[100px] w-[200px] md:w-[250px] sm:w-[180px]" src={jal} ></img></div>
                    </div></center>
                </div>
                <div className="text-2xl text-center pt-8  text-fourthColor">
                    PLATINUM
                    <div className="mt-3 flex justify-center items-center"><div className="relative left-[42px] bg-white rounded-full h-[10px] w-[10px]"></div><hr className="rounded-full w-20" /></div>
                    <center><div className="w-[90%] max-w-[1100px] lg:w-[80%] grid grid-cols-2 md:grid-cols-2 xl:grid-cols-2 sm:grid-cols-2 md:px-0 gap-2 py-8 ">
                        <div ><img className="h-[100px] w-[200px] md:w-[250px] sm:w-[180px]" src={allterra} ></img></div>
                        <div ><img className="h-[100px] w-[200px] md:w-[250px] sm:w-[180px]" src={aarica} ></img></div>
                    </div></center>
                </div>
                <div className="text-2xl text-center pt-3 text-fourthColor">
                    GOLD
                    <div className="mt-3 flex justify-center items-center"><div className="relative left-[42px] bg-white rounded-full h-[10px] w-[10px]"></div><hr className="rounded-full w-20" /></div>
                    <center><div className="w-[90%] max-w-[1100px] lg:w-[80%] grid grid-cols-4 md:grid-cols-4 xl:grid-cols-4 sm:grid-cols-4 md:px-0 gap-6 py-8 ">
                        <div ><img className="h-[100px] w-[200px] md:w-[250px] sm:w-[180px]" src={aimil} ></img></div>
                        <div ><img className="h-[100px] w-[200px] md:w-[250px] sm:w-[180px]" src={csi} ></img></div>
                        <div ><img className="h-[100px] w-[200px] md:w-[250px] sm:w-[180px]" src={awadh} ></img></div>
                        <div ><img className="h-[100px] w-[200px] md:w-[250px] sm:w-[180px]" src={sbi} ></img></div>
                    </div></center>
                </div>
                <div className="text-2xl text-center pt-3 text-fourthColor">
                    SILVER
                    <div className="mt-3 flex justify-center items-center"><div className="relative left-[42px] bg-white rounded-full h-[10px] w-[10px]"></div><hr className="rounded-full w-20" /></div>
                    <center><div className="w-[90%] max-w-[1100px] lg:w-[80%] grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3 sm:grid-cols-3 md:px-0 gap-6 py-8 ">
                        <div ><img className="h-[100px] w-[200px] md:w-[250px] sm:w-[180px]" src={heico} ></img></div>
                    </div></center>
                </div>
            </div>
        </>
    )
}

export default Sponsors