/* eslint-disable react/no-unescaped-entities */

function AboutUs() {
  return (
    <div className="flex flex-col justify-center items-center bg-[url('https://files.yappe.in/place/full/administration-block-iit-ropar-8176406.webp')] bg-cover">
        <div className="w-[90%] max-w-[1100px] lg:w-[80%] my-16 h-auto min-h-[90%]  flex flex-col
             bg-gray-100/80 backdrop-brightness-75 px-4 md:p-8">
            <h1 className="text-4xl py-5">About Us</h1>
            <p className="pb-5">The Indian Institute of Technology Ropar (IIT Ropar) is one of the eight new IITs
                established by the Ministry of Human Resource Development (MHRD), Government of India,
                in 2009. Following the true tradition of the IIT system, the institute provides
                state-of-the-art technical education across various fields and facilitates the
                transmission of knowledge in line with the latest developments in pedagogy.
                <br></br>
                The journey began with the first academic session (2008–09) conducted at the
                IIT Delhi campus, and after that, the institute started functioning from its
                transit campus in Rupnagar on August 1, 2009. The foundation stone for the
                permanent campus was laid on February 24, 2009. IIT Ropar celebrates its
                Foundation Day on the same date every year. The permanent campus is spread over 525
                acres with all necessary facilities, is a testament to the institute's commitment
                to providing a conducive learning environment.
                <br></br>
                In terms of rankings, IIT Ropar has secured the 22nd and 33rd positions in
                the National Institutional Ranking Framework (NIRF) 2023 for Engineering and
                Overall categories, respectively. Additionally, it holds the 86th position in the
                Times Higher Education (THE) World University Rankings 2023. With
                a strong track record of placements, IIT Ropar emphasizes its dedication
                to offering students a bright future and a wide array of career opportunities.
            </p>
            <a  className='text-firstColor hover:text-thirdColor hover:underline py-5' href='https://www.iitrpr.ac.in/'>Link to the Website</a>
        </div>

    </div>
  )
}

export default AboutUs