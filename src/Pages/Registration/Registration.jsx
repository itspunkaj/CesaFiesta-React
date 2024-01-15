
function Registration() {
  return (
    <div className="bg-fourthColor pb-20">
      <div className="flex justify-center py-10" >
        <div className=" text-3xl md:text-4xl font-bold">Registration Fees</div>
      </div>
      <div className="flex justify-center text-center px-10">
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
      </div>
      <div className="flex justify-center p-10 leading-loose">
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
      <div className="flex justify-center md:text-xl font-bold px-10">📌 Selected abstracts will be considered for book chapters published by Springer Nature</div>
    </div>
  )
}

export default Registration