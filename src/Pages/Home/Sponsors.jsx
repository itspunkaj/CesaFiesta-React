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
function Sponsors() {
    return (
        <>
            <div className="bg-thirdColor pb-8">
                <div className="text-center text-4xl pt-8 md:pt-12 font-semibold text-fourthColor">
                    Sponsors
                </div>
                <div className="text-2xl text-center pt-8  text-fourthColor">
                    PLATINUM
                    <div className="mt-3 flex justify-center items-center"><div className="relative left-[42px] bg-white rounded-full h-[10px] w-[10px]"></div><hr className="rounded-full w-20" /></div>
                    <center><div className="w-[90%] max-w-[1100px] lg:w-[80%] grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3 sm:grid-cols-3 md:px-0 gap-6 py-8 ">
                        <div ><img className="h-[100px] w-[200px] md:w-[250px] sm:w-[180px]" src={allterra} ></img></div>
                        <div ><img className="h-[100px] w-[200px] md:w-[250px] sm:w-[180px]" src={awadh} ></img></div>
                        <div ><img className="h-[100px] w-[200px] md:w-[250px] sm:w-[180px]" src={ushta} ></img></div>
                    </div></center>
                </div>
                <div className="text-2xl text-center pt-3 text-fourthColor">
                    GOLD
                    <div className="mt-3 flex justify-center items-center"><div className="relative left-[42px] bg-white rounded-full h-[10px] w-[10px]"></div><hr className="rounded-full w-20" /></div>
                    <center><div className="w-[90%] max-w-[1100px] lg:w-[80%] grid grid-cols-1 md:grid-cols-1 xl:grid-cols-1 sm:grid-cols-1 md:px-0 gap-6 py-8 ">
                        <div ><img className="h-[100px] w-[200px] md:w-[250px] sm:w-[180px]" src={zen} ></img></div>
                    </div></center>
                </div>
                <div className="text-2xl text-center pt-3 text-fourthColor">
                    SILVER
                    <div className="mt-3 flex justify-center items-center"><div className="relative left-[42px] bg-white rounded-full h-[10px] w-[10px]"></div><hr className="rounded-full w-20" /></div>
                    <center><div className="w-[90%] max-w-[1100px] lg:w-[80%] grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3 sm:grid-cols-3 md:px-0 gap-6 py-8 ">
                        <div ><img className="h-[100px] w-[200px] md:w-[250px] sm:w-[180px]" src={ae} ></img></div>
                        <div ><img className="h-[100px] w-[200px] md:w-[250px] sm:w-[180px]" src={perkin} ></img></div>
                        <div ><img className="h-[100px] w-[200px] md:w-[250px] sm:w-[180px]" src={isrs} ></img></div>
                    </div></center>
                </div>
                <div className="text-2xl text-center pt-3 text-fourthColor">
                    BEST WISHERS
                    <div className="mt-3 flex justify-center items-center"><div className="relative left-[42px] bg-white rounded-full h-[10px] w-[10px]"></div><hr className="rounded-full w-20" /></div>
                    <center><div className="w-[90%] max-w-[1100px] lg:w-[80%] grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3 sm:grid-cols-3 md:px-0 gap-6 py-8 ">
                        <div ><img className="h-[100px] w-[200px] md:w-[250px] sm:w-[180px]" src={finite} ></img></div>
                        <div ><img className="h-[100px] w-[200px] md:w-[250px] sm:w-[180px]" src={mass} ></img></div>
                        <div ><img className="h-[100px] w-[200px] md:w-[250px] sm:w-[180px]" src={g} ></img></div>
                    </div></center>
                </div>
            </div>
        </>
    )
}

export default Sponsors