import Qr from './QRCodeRevnueAccount.jpg'
function Registration() {
  return (
    <div className="bg-fourthColor pb-20">
      {/* <div className='bg-secondColor'>
        <div className="flex justify-center md:text-xl py-2 text-black"> The registrations have started.&nbsp; <a className=" text-thirdColor underline "
          target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLScfxGyJKUjSDJcTS-teLv7oU5UpjQrhTCeisp7C766AqCn_Kw/viewform">Click Here  </a>&nbsp; to register</div>
      </div> */}
      <div className="flex justify-center py-3" >
        <div className=" text-3xl md:text-4xl justify-center font-bold">Registration Fees</div>
      </div>

      <div className='flex text-center justify-center'>
        <table className="table-fixed border-collapse border-spacing-2 border-2 w-auto border-slate-300">
          <thead>
            <tr className='bg-firstColor text-white'>
              <th className="md:text-xl "></th>
              <th className="md:text-xl font-semibold  p-3 px-3">Early Bird Fees</th>
              <th className="md:text-xl font-semibold  p-3 px-3">Regular Fees</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:transform hover:scale-[1.02] hover:bg-[#f8f9fa] transition-transform duration-200 ease-in-out">
              <td className="text-md md:text-[18px] border-2 border-slate-300  py-3 px-3">Indian Students</td>
              <td className="text-md md:text-[18px] border-2 border-slate-300  py-3 px-3">INR 3000</td>
              <td className="text-md md:text-[18px] border-2 border-slate-300  py-3 px-3">INR 3500</td>
            </tr>
            <tr className="hover:transform hover:scale-[1.02] hover:bg-[#f8f9fa] transition-transform duration-200 ease-in-out">
              <td className="text-md md:text-[18px] border-2 border-slate-300  py-3 px-3">International Students</td>
              <td className="text-md md:text-[18px] border-2 border-slate-300  py-3 px-3">USD 120</td>
              <td className="text-md md:text-[18px] border-2 border-slate-300  py-3 px-3">USD 150</td>
            </tr>
            <tr className="hover:transform hover:scale-[1.02] hover:bg-[#f8f9fa] transition-transform duration-200 ease-in-out">
              <td className="text-md md:text-[18px] border-2 border-slate-300  py-3 px-3">Research Scientists/Faculty</td>
              <td className="text-md md:text-[18px] border-2 border-slate-300  py-3 px-3">INR 5000</td>
              <td className="text-md md:text-[18px] border-2 border-slate-300  py-3 px-3">INR 7500</td>
            </tr>
          </tbody>
        </table>
        {/* <div>
          <img src={Qr} className='w-[250px] h-a'></img>
          </div> */}
        {/* <div className='flex pl-40 justify-center'>
          <img src={Qr} className='h-3/6 w-3/12'></img>
        </div> */}
      </div>
      {/* <div className='flex text-center justify-center'>
        <table className="table-fixed border-collapse border-spacing-2 border-2 w-auto border-slate-600">
          <tr>
            <td className="text-md md:text-xl border-2 border-slate-600 py-2 px-3">Name</td>
            <td className="text-md md:text-xl border-2 border-slate-600 py-2 px-3">IIT ROPAR Revenue Account</td>
          </tr>
          <tr>
            <td className="text-md md:text-xl border-2 border-slate-600 py-2 px-3">Account Number</td>
            <td className="text-md md:text-xl border-2 border-slate-600 py-2 px-3">37360100716</td>
          </tr>
          <tr>
            <td className="text-md md:text-xl border-2 border-slate-600 py-2 px-3">IFSC CODE</td>
            <td className="text-md md:text-xl border-2 border-slate-600 py-2 px-3">SBIN0013181</td>
          </tr>
          <tr>
            <td className="text-md md:text-xl border-2 border-slate-600 py-2 px-3">UPI ID</td>
            <td className="text-md md:text-xl border-2 border-slate-600 py-2 px-3">THEREGISTRAR716@SBI</td>
          </tr>
        </table>
      </div> */}
      <div className='flex justify-center'>
        <div className='justify-center w-[90%] max-w-[1100px] lg:w-[80%] my-10 h-auto min-h-[90%] grid grid-cols-12 divide-x divide-solid divide-firstColor'>
          <div className="col-span-12 md:col-span-8 pr-2">
            <div className="flex text-3xl md:text-3xl justify-center font-semibold">Account Details</div>
            <div className='flex text-center justify-center py-3'>
              <table className="table-fixed border-collapse border-spacing-2 border-2 w-auto border-slate-600">
                <tr>
                  <td className="text-md md:text-xl border-2 border-slate-600 py-2 px-3">Name</td>
                  <td className="text-md md:text-xl border-2 border-slate-600 py-2 px-3">IIT ROPAR Revenue Account</td>
                </tr>
                <tr>
                  <td className="text-md md:text-xl border-2 border-slate-600 py-2 px-3">Account Number</td>
                  <td className="text-md md:text-xl border-2 border-slate-600 py-2 px-3">37360100716</td>
                </tr>
                <tr>
                  <td className="text-md md:text-xl border-2 border-slate-600 py-2 px-3">IFSC CODE</td>
                  <td className="text-md md:text-xl border-2 border-slate-600 py-2 px-3">SBIN0013181</td>
                </tr>
                <tr>
                  <td className="text-md md:text-xl border-2 border-slate-600 py-2 px-3">UPI ID</td>
                  <td className="text-md md:text-xl border-2 border-slate-600 py-2 px-3">THEREGISTRAR716@SBI</td>
                </tr>
              </table>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 pl-4">
            <div className="text-3xl font-semibold">Notifications</div>
            <div className="my-10 text-lg leading-relaxed">
              <ul className="list-disc pl-5">
              {/* <li><a className="text-firstColor font-medium hover:text-thirdColor py-2" href='https://docs.google.com/forms/d/e/1FAIpQLScfxGyJKUjSDJcTS-teLv7oU5UpjQrhTCeisp7C766AqCn_Kw/viewform' target='blank_'>Click here </a> to register</li> */}
                <li><a className="text-firstColor font-medium hover:text-thirdColor py-3" href='https://docs.google.com/presentation/d/1mPXSCvjDbYVOnD0bi9o0bgFD0vZW4xr3/edit#slide=id.p1' target='blank_'>Presentation Tempelate</a></li>
                <li><a className="text-firstColor font-medium hover:text-thirdColor py-3" href='https://docs.google.com/presentation/d/1mQgTIQtOpmEj2hbELKVoTWTv33eUm8jW/edit#slide=id.p1' target='blank_'>Poster Tempelate</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center p-5 leading-loose">
        <div className="flex flex-col">
          <div className="md:text-xl">Registration Fees <b>include</b> the following :-</div>
          <div>
            <ul className="md:text-xl list-inside list-disc">
              <li>Lunches</li>
              <li>Materials</li>
              <li>High Tea</li>
              <li>GST</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center md:text-xl font-bold px-10 py-3">📌 Selected abstracts will be considered for book chapters published by Springer Nature</div>
      <div className="flex flex-col  px-10">
        <div className="md:text-4xl font-bold">Guidelines:-</div><br></br>
        <div>
          <ul className="md:text-xl list-disc list-inside">
            <li>Registration is secured after payment of the registration fee.</li>
            <li className="py-2">Registrations are non-transferable, the person registering for the conference and secured payment would only be allowed to participate in the event.</li>
            <li className="py-2">The registration fee is non-refundable.</li>
            <li className="py-2">Each registration allows a maximum of two presentations. However, participants with more than two abstracts need to re-register.</li>
            <li className="py-2">In case of any co-author accompanying the presenter, the co-author need to register separately.</li>
            <li className="py-2">Registration for the conference implies automatic acceptance of the <a className="text-red-600 hover:text-thirdColor hover:underline " target="_blank" href="https://drive.google.com/file/d/1KDb7hNvkn32XDOPSdF8ClQbBv3xFiizP/view?usp=drive_link">rule of conduct</a>.</li>
            <li className="py-2">No further registration is allowed after 20.02.2024.</li>
            <li className='py-2'>The poster dimension should be 36 inches (3 feet) wide X 48 inches (4 feet) high.</li>
            <li className='py-2'>You may print the poster on the material of your convenience providing the content/figure/tables are clearly visible with no defects.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Registration