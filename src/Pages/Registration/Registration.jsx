
function Registration() {
  return (
    <div className="pb-20 bg-fourthColor">
      <div className="flex justify-center py-10" >
        <div className="text-4xl font-bold">Registration Fees</div>
      </div>
      <div className="flex justify-center text-center">
        <table className="table-fixed border-collapse border-spacing-2 border-2 w-[800px] border-slate-600">
          <thead>
            <tr>
              <th className="text-2xl border-2 border-slate-900 py-1"></th>
              <th className="text-2xl border-2 border-slate-900 py-1">Early Bird<br></br>(until 20 Feb,2024)</th>
              <th className="text-2xl border-2 border-slate-900 py-1">Regular</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-xl border-2 border-slate-600 py-2">Faculty/Scientist Fee</td>
              <td className="text-xl border-2 border-slate-600 py-2">Rs. 4000</td>
              <td className="text-xl border-2 border-slate-600 py-2">Rs. 5000</td>
            </tr>
            <tr>
              <td className="text-xl border-2 border-slate-600 py-2">Student Fee</td>
              <td className="text-xl border-2 border-slate-600 py-2">Rs. 2800</td>
              <td className="text-xl border-2 border-slate-600 py-2">Rs. 3500</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col w-[800px] pt-10">
        <div className="text-xl"> The Registration Fees will <b> include</b> the following :-</div>
        <div>
          <ul className="text-xl list-inside list-disc">
            <li>Lunches</li>
            <li>Materials</li>
            <li>High Tea</li>
            <li>GST</li>
            
          </ul>
        </div>  
        </div>
      </div>
    </div>
  )
}

export default Registration