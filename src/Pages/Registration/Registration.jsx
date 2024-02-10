import Qr from './QRCodeRevnueAccount.jpg'
function Registration() {
  return (
    <div className="bg-fourthColor pb-20">
      <div className='bg-secondColor'>
       <div className="flex justify-center md:text-xl py-2 text-black"> The registrations have started.&nbsp; <a className=" text-thirdColor underline " 
       target="_blank" href="">Click Here  </a>&nbsp; to register</div>
      </div>
      <div className="flex justify-center py-3" >
        <div className=" text-3xl md:text-4xl justify-center font-bold">Registration Fees</div>
      </div>

      <div className='flex text-center justify-center'>
        <table className="table-fixed border-collapse border-spacing-2 border-2 w-auto border-slate-600">
          <thead>
            <tr>
              <th className="md:text-2xl border-2 border-slate-900"></th>
              <th className="md:text-2xl border-2 border-slate-900 p-2 px-3">Early Bird (until 20 Feb,2024)</th>
              <th className="md:text-2xl border-2 border-slate-900 p-2 px-3">Regular</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-md md:text-xl border-2 border-slate-600 py-2 px-3">Faculty and Scientist Fee</td>
              <td className="text-md md:text-xl border-2 border-slate-600 py-2 px-3">Rs. 4000</td>
              <td className="text-md md:text-xl border-2 border-slate-600 py-2 px-3">Rs. 5000</td>
            </tr>
            <tr>
              <td className="text-md md:text-xl border-2 border-slate-600 py-2 px-3">Student Fee</td>
              <td className="text-md md:text-xl border-2 border-slate-600 py-2 px-3">Rs. 2800</td>
              <td className="text-md md:text-xl border-2 border-slate-600 py-2 px-3">Rs. 3500</td>
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
      <div className="flex text-3xl md:text-4xl justify-center font-bold py-3">Account Details</div>
      <div className='flex text-center justify-center'>
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
      <div className="flex justify-center md:text-xl font-bold px-10">📌 For the participants seeking accommodation, the details would be updated soon.</div>
      <div className="flex justify-center md:text-xl font-bold px-10 py-3">📌 Selected abstracts will be considered for book chapters published by Springer Nature</div>
      <div className="flex flex-col  px-10">
        <div className="md:text-4xl font-bold">Note:-</div><br></br>
        <div>
          <ul className="md:text-xl list-disc list-inside">
            <li>Registration is secured after payment of the registration fee</li>
            <li className="py-2">Registrations are non-transferable, the person registering for the conference and secured payment would only be allowed to participate in the event.</li>
            <li className="py-2">The registration fee is non-refundable.</li>
            <li className="py-2">Each registration allows a maximum of two presentations. However, participants with more than two abstracts need to re-register.</li>
            <li className="py-2">In case of any co-author accompanying the presenter, the co-author need to register separately.</li>
            <li className="py-2">Registration for the conference implies automatic acceptance of the <a className="text-red-600 hover:text-thirdColor hover:underline " target="_blank" href="https://drive.google.com/file/d/1KDb7hNvkn32XDOPSdF8ClQbBv3xFiizP/view?usp=drive_link">rule of conduct</a>.</li>
            <li className="py-2">No further registration is allowed after 20.02.2024.</li>

          </ul>
        </div>
      </div>
    </div>
  )
}

export default Registration