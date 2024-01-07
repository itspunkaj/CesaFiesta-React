const Card = () => {
    return (
        <div className="h-64 border-4 border-slate-200 rounded-xl shadow-sm pt-2">
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
            <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1 justify-between px-40 gap-6 pb-3 pt-8 ">
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
        </div>
    )
}

export default KeyNoteSpeakers