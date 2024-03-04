import AdminSideBar from "./ADMINSIDE"

const AdminPay = () => {
  return (
    <div>
        <AdminSideBar/>
        <div className="lg:pl-[30vw] pt-10">      
  <table className="table-auto md:w-3/4 lg:w-1/80">
    <thead>
      <tr>
        <th className="px-4 py-2">Payment ID</th>
        <th className="px-4 py-2">Amount</th>
        <th className="px-4 py-2">Date</th>
        <th className="px-4 py-2">Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border px-9 py-5">1</td>
        <td className="border px-9 py-5">$50.00</td>
        <td className="border px-9 py-5">2024-02-25</td>
        <td className="border px-9 py-5 lg:pl-[9vw]">
          <button className="bg-green-400 hover:bg-green-900 text-white font-bold py-2 px-4 rounded mr-10">Paid</button>
        </td>
      </tr>

      <tr>
        <td className="border px-9 py-5">2</td>
        <td className="border px-9 py-5">$100.00</td>
        <td className="border px-9 py-5">2024-02-20</td>
        <td className="border px-9 py-5 lg:pl-[8vw]">
          <button className="bg-green-400 hover:bg-green-900 text-white font-bold py-2 px-4 rounded mr-10">Paid</button>
        </td>
      </tr>

      <tr>
        <td className="border px-9 py-5">3</td>
        <td className="border px-9 py-5">$75.00</td>
        <td className="border px-9 py-5">2024-02-15</td>
        <td className="border px-9 py-5 lg:pl-[9vw]">
          <button className="bg-red-400 hover:bg-red-900 text-white font-bold py-2 px-4 rounded mr-10">Pending</button>
        </td>
      </tr>

      <tr>
        <td className="border px-9 py-5">4</td>
        <td className="border px-9 py-5">$120.00</td>
        <td className="border px-9 py-5">2024-02-10</td>
        <td className="border px-9 py-5 lg:pl-[8vw]">
          <button className="bg-blue-400 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded mr-10">Processing</button>
        </td>
      </tr>
      {/* Add more rows as needed */}
    </tbody>
  </table>
</div>


    </div>
  )
}

export default AdminPay
