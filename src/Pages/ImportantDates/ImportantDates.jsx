function ImportantDates() {
    return (
      <div className="pb-32 bg-fourthColor">
        <div className="flex justify-center py-10" >
          <div className="text-3xl md:text-4xl font-bold">Important Dates</div>
        </div>
        <div className="flex justify-center text-center px-10">
          <table className="table-fixed border-collapse border-spacing-2 border-2 w-[800px] border-slate-600">
            <thead>
              <tr>
                <th className="md:text-2xl border-2 border-slate-900 py-2 px-3">Event</th>
                <th className="md:text-2xl border-2 border-slate-900 py-2 px-3">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="md:text-xl border-2 border-slate-600 py-2 px-3">Last Day for Abstract Submission</td>
                <td className="md:text-xl border-2 border-slate-600 py-2 px-3">8th Feb, 2024</td>
              </tr>
              <tr>
                <td className="md:text-xl border-2 border-slate-600 py-2 px-3">Notification of Acceptance</td>
                <td className="md:text-xl border-2 border-slate-600 py-2 px-3">12th Feb, 2024</td>
              </tr>
              <tr>
                <td className="md:text-xl border-2 border-slate-600 py-2 px-3">Opening of Online Registration</td>
                <td className="md:text-xl border-2 border-slate-600 py-2 px-3">12th Feb, 2024</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
  
  export default ImportantDates