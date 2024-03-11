import UserSideBar from "./USERSIDE"

const UserPay = () => {
  return (
    <div>
     <UserSideBar/>
        <div className="lg:pl-[30vw] pt-5">
  <table className="table-auto md:w-3/4 lg:w-1/80">
    <thead>
      <tr className="bg-gray-200">
        <th className="px-4 py-2">S.No.</th>
        <th className="px-4 py-2">Payment</th>
        <th className="px-4 py-2">Total Enrolled</th>
        <th className="px-4 py-2">Time </th>
      </tr>
    </thead>
    <tbody>
      <tr className="bg-white hover:bg-gray-100 transition-colors duration-300">
        <td className="border px-4 py-2">1</td>
        <td className="border px-4 py-2">Payment Name</td>
        <td className="border px-4 py-2">100</td>
        <td className="border px-2 py-2 lg:pl-[6vw] ">2 hours
          {/* <button className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-1 px-3 rounded mr-2 transition-colors duration-300">Add</button>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-3 rounded mr-2 transition-colors duration-300">Edit</button>
          <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded mr-2 transition-colors duration-300">Remove</button> */}
        </td>
      </tr>

      <tr className="bg-white hover:bg-gray-100 transition-colors duration-300">
        <td className="border px-4 py-2">1</td>
        <td className="border px-4 py-2">Payment Name</td>
        <td className="border px-4 py-2">100</td>
        <td className="border px-2 py-2 lg:pl-[6vw] ">
          {/* <button className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-1 px-3 rounded mr-2 transition-colors duration-300">Add</button>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-3 rounded mr-2 transition-colors duration-300">Edit</button>
          <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded mr-2 transition-colors duration-300">Remove</button> */}
        </td>
      </tr>

      <tr className="bg-white hover:bg-gray-100 transition-colors duration-300">
        <td className="border px-4 py-2">1</td>
        <td className="border px-4 py-2">Payment Name</td>
        <td className="border px-4 py-2">100</td>
        <td className="border px-2 py-2 lg:pl-[6vw] ">
          <button className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-1 px-3 rounded mr-2 transition-colors duration-300">Add</button>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-3 rounded mr-2 transition-colors duration-300">Edit</button>
          <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded mr-2 transition-colors duration-300">Remove</button>
        </td>
      </tr>

      <tr className="bg-white hover:bg-gray-100 transition-colors duration-300">
        <td className="border px-4 py-2">1</td>
        <td className="border px-4 py-2">Payment Name</td>
        <td className="border px-4 py-2">100</td>
        <td className="border px-2 py-2 lg:pl-[6vw] ">
          <button className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-1 px-3 rounded mr-2 transition-colors duration-300">Add</button>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-3 rounded mr-2 transition-colors duration-300">Edit</button>
          <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded mr-2 transition-colors duration-300">Remove</button>
        </td>
      </tr>

      <tr className="bg-white hover:bg-gray-100 transition-colors duration-300">
        <td className="border px-4 py-2">1</td>
        <td className="border px-4 py-2">Payment Name</td>
        <td className="border px-4 py-2">100</td>
        <td className="border px-2 py-2 lg:pl-[6vw] ">
          <button className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-1 px-3 rounded mr-2 transition-colors duration-300">Add</button>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-3 rounded mr-2 transition-colors duration-300">Edit</button>
          <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded mr-2 transition-colors duration-300">Remove</button>
        </td>
      </tr>

      <tr className="bg-white hover:bg-gray-100 transition-colors duration-300">
        <td className="border px-4 py-2">1</td>
        <td className="border px-4 py-2">Payment Name</td>
        <td className="border px-4 py-2">100</td>
        <td className="border px-2 py-2 lg:pl-[6vw] ">
          <button className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-1 px-3 rounded mr-2 transition-colors duration-300">Add</button>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-3 rounded mr-2 transition-colors duration-300">Edit</button>
          <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded mr-2 transition-colors duration-300">Remove</button>
        </td>
      </tr>

      <tr className="bg-white hover:bg-gray-100 transition-colors duration-300">
        <td className="border px-4 py-2">1</td>
        <td className="border px-4 py-2">Payment Name</td>
        <td className="border px-4 py-2">100</td>
        <td className="border px-2 py-2 lg:pl-[6vw] ">
          <button className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-1 px-3 rounded mr-2 transition-colors duration-300">Add</button>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-3 rounded mr-2 transition-colors duration-300">Edit</button>
          <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded mr-2 transition-colors duration-300">Remove</button>
        </td>
      </tr>

      <tr className="bg-white hover:bg-gray-100 transition-colors duration-300">
        <td className="border px-4 py-2">1</td>
        <td className="border px-4 py-2">Payment Name</td>
        <td className="border px-4 py-2">100</td>
        <td className="border px-2 py-2 lg:pl-[6vw] ">
          <button className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-1 px-3 rounded mr-2 transition-colors duration-300">Add</button>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-3 rounded mr-2 transition-colors duration-300">Edit</button>
          <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded mr-2 transition-colors duration-300">Remove</button>
        </td>
      </tr>

      {/* Add more rows as needed */}
    </tbody>
  </table>
</div>
</div>
  )
}

export default UserPay
