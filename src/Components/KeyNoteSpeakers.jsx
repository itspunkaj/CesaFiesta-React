const Card = () => {
    return (
        <div className="pr-3 pl-3">
            <img className="h-40" src="https://ctrg2023.trgindia.org/speakers/1.jpg" />
            <br />
            <a href="https://ctrg2023.trgindia.org/keynote_speakers.php">
            <span className="text-sm">Prof. Lelitha Devi Vanajakshi</span>
            </a>
        </div>
    )
}
function KeyNoteSpeakers() {
    return (
        <div className="my-[40px]">
            <h3 className="text-center text-3xl pt-8"><b>Keynote Speakers</b></h3>
            <div className="grid grid-cols-5 justify-between pl-60 pb-3 pt-8 pr-60">
                <Card/>
            </div>
        </div>
    )
}

export default KeyNoteSpeakers