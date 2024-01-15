/* eslint-disable react/prop-types */
const Card = (props) => {
    return (
        <div className="bg-fourthColor h-auto min-w-32  max-w-52 border-4 border-slate-300 rounded-xl shadow-sm pt-2">
            <center><img className={`h-40 ${props.border}`} src={props.imageUrl} />
                <br />
                <a className="text-blue-900 hover:text-blue-600" href="https://ctrg2023.trgindia.org/keynote_speakers.php">
                    <span className="text-md">Speaker Name</span>
                </a>
            </center>
        </div>
    )
}
function KeyNoteSpeakers() {
    return (
        <div className="py-[40px]">
            <h3 className="text-center text-3xl pt-8 font-semibold">Keynote Speakers</h3>
            <center><div className="w-[90%] max-w-[1100px] lg:w-[80%] grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 sm:grid-cols-3 md:px-0 gap-6 pb-3 pt-8 ">
                <Card imageUrl="https://e7.pngegg.com/pngimages/304/275/png-clipart-user-profile-computer-icons-profile-miscellaneous-logo-thumbnail.png" />
                <Card imageUrl="https://e7.pngegg.com/pngimages/304/275/png-clipart-user-profile-computer-icons-profile-miscellaneous-logo-thumbnail.png" />
                <Card imageUrl="https://e7.pngegg.com/pngimages/304/275/png-clipart-user-profile-computer-icons-profile-miscellaneous-logo-thumbnail.png" />
                <Card imageUrl="https://e7.pngegg.com/pngimages/304/275/png-clipart-user-profile-computer-icons-profile-miscellaneous-logo-thumbnail.png" />
                <Card imageUrl="https://e7.pngegg.com/pngimages/304/275/png-clipart-user-profile-computer-icons-profile-miscellaneous-logo-thumbnail.png" />
                <Card imageUrl="https://e7.pngegg.com/pngimages/304/275/png-clipart-user-profile-computer-icons-profile-miscellaneous-logo-thumbnail.png" />
                <Card imageUrl="https://e7.pngegg.com/pngimages/304/275/png-clipart-user-profile-computer-icons-profile-miscellaneous-logo-thumbnail.png" />
                <Card imageUrl="https://e7.pngegg.com/pngimages/304/275/png-clipart-user-profile-computer-icons-profile-miscellaneous-logo-thumbnail.png" />
                <Card imageUrl="https://e7.pngegg.com/pngimages/304/275/png-clipart-user-profile-computer-icons-profile-miscellaneous-logo-thumbnail.png" />
                <Card imageUrl="https://e7.pngegg.com/pngimages/304/275/png-clipart-user-profile-computer-icons-profile-miscellaneous-logo-thumbnail.png" />
            </div>
            </center>
        </div>
    )
}

export default KeyNoteSpeakers