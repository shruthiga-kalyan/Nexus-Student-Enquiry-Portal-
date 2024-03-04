// import Navbar from "./ADMINNAV";
import AdminSideBar from "./ADMINSIDE";
// import AdminSideBar from "./AdminSideBar";

const Courses = () => {
  return (
     

    <div className="overflow-x-auto">
      <AdminSideBar/>
      <div>
      
       <div className="grid grid-cols-1 gap-4 px-4 mt-8 sm:grid-cols-2 sm:px-8 lg:pl-[20vw] ">
        <div className="flex items-center  bg-white border rounded-sm overflow-hidden shadow">
          <div className="p-4 bg-pink-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          </div>
          <div className="px-4 text-gray-700">
            <h3 className="text-sm tracking-wider">Total Member</h3>
            <p className="text-3xl">12,768</p>
          </div>
        </div>

    
        <div className="grid grid-cols-1 gap-4 px-4 mt-8  sm:px-8  ">
      <div className="flex items-center mr-9 bg-white border rounded-sm overflow-hidden shadow">
           <div className="p-4 bg-purple-400">
             <svg
               xmlns="http://www.w3.org/2000/svg"
               className="h-12 w-12 text-white"
               fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
               <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          </div>
          <div className="px-4 text-gray-700">
            <h3 className="text-sm tracking-wider">Total Courses</h3>
            <p className="text-3xl">12,003</p>
          </div>
        </div>
        </div>
       </div> 
     </div>

      <div className=" lg:pl-[30vw] pt-10 ">      
      <table className="table-auto md:w-3/4 lg:w-1/80">
        <thead>
          <tr>
            <th className="px-4 py-2">S.No.</th>
            <th className="px-4 py-2">Course</th>
            <th className="px-4 py-2">Total Enrolled</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">1</td>
            <td className="border px-4 py-2">Course Name</td>
            <td className="border px-4 py-2">100</td>
            <td className="border px-2 py-2 lg:pl-[6vw] ">
              <button className="bg-blue-400 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded mr-9">Add</button>
              <button className="bg-green-500 hover:bg-green-900 text-white font-bold py-2 px-4 rounded mr-9">Edit</button>
              <button className="bg-red-500 hover:bg-red-900 text-white font-bold py-2 px-4 rounded  mr-9">Remove</button>
            </td>
          </tr>

          <tr>
            <td className="border px-4 py-2">2</td>
            <td className="border px-4 py-2">Course Name</td>
            <td className="border px-4 py-2">100</td>
            <td className="border px-2 py-2 lg:pl-[6vw] ">
              <button className="bg-blue-400 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded mr-9">Add</button>
              <button className="bg-green-500 hover:bg-green-900 text-white font-bold py-2 px-4 rounded mr-9">Edit</button>
              <button className="bg-red-500 hover:bg-red-900 text-white font-bold py-2 px-4 rounded  mr-9">Remove</button>
            </td>
          </tr>


          <tr>
            <td className="border px-4 py-2">3</td>
            <td className="border px-4 py-2">Course Name</td>
            <td className="border px-4 py-2">100</td>
            <td className="border px-2 py-2 lg:pl-[6vw] ">
              <button className="bg-blue-400 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded mr-9">Add</button>
              <button className="bg-green-500 hover:bg-green-900 text-white font-bold py-2 px-4 rounded mr-9">Edit</button>
              <button className="bg-red-500 hover:bg-red-900 text-white font-bold py-2 px-4 rounded  mr-9">Remove</button>
            </td>
          </tr>

          <tr>
            <td className="border px-4 py-2">4</td>
            <td className="border px-4 py-2">Course Name</td>
            <td className="border px-4 py-2">100</td>
            <td className="border px-2 py-2 lg:pl-[6vw] ">
              <button className="bg-blue-400 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded mr-9">Add</button>
              <button className="bg-green-500 hover:bg-green-900 text-white font-bold py-2 px-4 rounded mr-9">Edit</button>
              <button className="bg-red-500 hover:bg-red-900 text-white font-bold py-2 px-4 rounded  mr-9">Remove</button>
            </td>
          </tr>


          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default Courses;
