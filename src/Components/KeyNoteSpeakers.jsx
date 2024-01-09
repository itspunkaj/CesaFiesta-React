const Card = () => {
    return (
        <div className="h-auto min-w-32  max-w-52 border-4 border-slate-200 rounded-xl shadow-sm pt-2">
            <center><img className="h-40" src="https://ctrg2023.trgindia.org/speakers/1.jpg" />
            <br />
            <a className="text-blue-900 hover:text-blue-600" href="https://ctrg2023.trgindia.org/keynote_speakers.php">
            <span className="text-md">Prof. Dr. Mitesh Surana, Naveen James</span>
            </a>
            </center>
        </div>
    )
}
function KeyNoteSpeakers() {
    return (
        <div className="my-[40px]">
            <h3 className="text-center text-3xl pt-8"><b>Keynote Speakers</b></h3>
            <center><div className="w-96 max-w-[1100px] md:w-[80%] sm:w-[90%] grid grid-cols-2 lg:grid-cols-5 sm:grid-cols-3 md:px-0 gap-6 pb-3 pt-8 ">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
            </center>
        </div>
    )
}

export default KeyNoteSpeakers