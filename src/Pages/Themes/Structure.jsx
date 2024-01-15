
function point(text) {
    return (
        <li className="flex items-center gap-3">
            <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
            </div>
            <div>{text}</div>
        </li>
    );
}
function Structure() {
    return (
        <div className={`structure flex justify-center items-center bg-cover bg-no-repeat bg-center min-h-[100vh]`}>
            <div className="flex justify-center w-[90%] max-w-[800px] md:w-[40%] md:ml-[50%] my-10 h-96 flex-col rounded-lg
              bg-[#f7f8f8] bg-opacity-70 backdrop-brightness-75 px-4 md:p-8 p-2">
                <h1 className="text-3xl md:text-4xl py-2 md:py-3 font-semibold font-sans text-center">Structural Engineering</h1>
                <h1 className="text-xl md:text-2xl py-2 text-gray-800 font-semibold font-sans text-center">Themes</h1>
                <ul className="pb-5 text-gray-800 px-5 font-medium text-sm md:text-base">
                    {point('Pre-Cast Construction')}
                    {point('Steel Structures')}
                    {point('Structural Fire Engineering and Safety')}
                    {point('Bridge Engineering')}
                    {point('Earthquake Engineering/Structural Dynamics')}
                    {point('Corrosion In RCC Structures')}
                    {point('Green Construction/New Materials For Construction')}
                </ul>
            </div>
        </div>
    )
}

export default Structure