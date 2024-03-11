import AdminSideBar from "./ADMINSIDE"

const AdminPay = () => {
  return (
    <div>
        <AdminSideBar/>
        <div className="lg:pl-[30vw] pt-5">
  <table className="table-auto md:w-3/4 lg:w-1/80">
    <thead>
      <tr className="bg-gray-200">
        <th className="px-4 py-2">S.No.</th>
        <th className="px-4 py-2">Payment</th>
        <th className="px-4 py-2">Total Enrolled</th>
      
      </tr>
    </thead>
    <tbody>
      <tr className="bg-white hover:bg-gray-100 transition-colors duration-300">
        <td className="border px-4 py-2">1</td>
        <td className="border px-4 py-2">Payment Name</td>
        <td className="border px-4 py-2">100</td>
       
      
      </tr>

      <tr className="bg-white hover:bg-gray-100 transition-colors duration-300">
        <td className="border px-4 py-2">1</td>
        <td className="border px-4 py-2">Payment Name</td>
        <td className="border px-4 py-2">100</td>
       
       
      </tr>

      

      {/* Add more rows as needed */}
    </tbody>
  </table>
</div>
</div>
  )
}

export default AdminPay
