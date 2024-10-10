function ImportantDates() {
    return (
      <div className="pb-32 bg-fourthColor">
        <div className="flex justify-center py-10" >
          <div className="text-3xl md:text-4xl font-bold">Important Dates</div>
        </div>
        <div className="flex justify-center text-center px-10">
          <table className="table-fixed border-collapse border-spacing-2 border-2 w-[1000px] border-slate-300">
            <thead>
              <tr className="bg-firstColor text-white">
                <th className="md:text-2xl  py-2 px-3">Event</th>
                <th className="md:text-2xl  py-2 px-3">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:transform hover:scale-[1.02] hover:bg-[#f8f9fa] transition-transform duration-200 ease-in-out">
                <td className="md:text-[18px] border-2 border-slate-300 py-4 px-3">Abstract Submission</td>
                <td className="md:text-[18px] border-2 border-slate-300 py-4 px-3">1st October - 31st October 2024</td>
              </tr>
              <tr className="hover:transform hover:scale-[1.02] hover:bg-[#f8f9fa] transition-transform duration-200 ease-in-out">
                <td className="md:text-[18px] border-2 border-slate-300 py-4 px-3">Notification of Acceptance</td>
                <td className="md:text-[18px] border-2 border-slate-300 py-4 px-3">4th November 2024</td>
              </tr>
              <tr className="hover:transform hover:scale-[1.02] hover:bg-[#f8f9fa] transition-transform duration-200 ease-in-out">
                <td className="md:text-[18px] border-2 border-slate-300 py-4 px-3">Opening of Online Registration</td>
                <td className="md:text-[18px] border-2 border-slate-300 py-4 px-3"><div><b>Early Bird offer</b> - 4th to 15th November 2024</div>
                          <div><b>Regular fees</b> - 16th to 30th November 2024</div></td>
              </tr>
              <tr className="hover:transform hover:scale-[1.02] hover:bg-[#f8f9fa] transition-transform duration-200 ease-in-out">
                <td className="md:text-[18px] border-2 border-slate-300 py-4 px-3">Symposium Date</td>
                <td className="md:text-[18px] border-2 border-slate-300 py-4 px-3">8th February - 9th February 2025</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
  
  export default ImportantDates