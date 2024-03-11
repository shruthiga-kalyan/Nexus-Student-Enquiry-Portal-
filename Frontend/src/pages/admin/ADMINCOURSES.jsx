import  { useState } from "react";
import AdminSideBar from "./ADMINSIDE";
import { useNavigate } from "react-router-dom";

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };


  const navigate= useNavigate();
  const handleNavigate=(path)=>{
    navigate(path);
  }
  // Define an array of course objects
  const courses = [
    { id: 1, name: "Fundamentals in Music Theory", totalEnrolled: 100 },
    { id: 2, name: "Introduction to Computer Science", totalEnrolled: 200 },
    { id: 3, name: "Artificial Intelligence Fundamentals", totalEnrolled: 150 },
  ];

  return (
    <div className="overflow-x-auto">
      <AdminSideBar />
      <div>
        <div className="grid grid-cols-1 gap-4 px-4 mt-8 sm:grid-cols-2 sm:px-8 lg:pl-[20vw]">
          <div className="grid grid-cols-1 gap-4 px-4 mt-8 sm:px-8">
            <div className="flex items-center mr-9 bg-white border rounded-sm overflow-hidden shadow">
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
                <h3 className="text-sm tracking-wider">Total Courses</h3>
                <p className="text-3xl">12,003</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 px-4 mt-8 sm:px-8">
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
                <h3 className="text-sm tracking-wider">Active Courses</h3>
                <p className="text-3xl">10,888</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-8 py-7 ">
          <div className=" text-center w-full mb-20 translate-x-20">
            <div className="relative mt-4 mx-auto lg:w-2/3">
              <input
                type="text"
                placeholder="Search course..."
                value={searchTerm}
                onChange={handleSearch}
                className="bg-gray-100 rounded-full border border-gray-400 focus:outline-none focus:border-gray-700 text-base px-8 py-2 w-full"
              />
              <button className="absolute right-0 top-0 mt-2 mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M15 15l5-5m0 0l-5-5m5 5H4"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

<div >

   
      <div className="text-center mt-4">
      </div>     

      <div className="lg:pl-[30vw] pt-1">
        <table className="table-auto md:w-3/4 lg:w-1/80">
        
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">S.No.</th>
              <th className="px-4 py-2">Course</th>
              <th className="px-4 py-2">Total Enrolled</th>
              <th className="px- py-2">Action 
              <button onClick={() => handleNavigate('/admin/addCourses')} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-3 rounded ml-9 transition-colors duration-300">Add</button>
</th>
            </tr>
          </thead>
          <tbody>
            {/* Map over the courses array to render rows */}
            {courses.map((course, index) => (
              <tr key={course.id} className="bg-white hover:bg-gray-100 transition-colors duration-300">
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2">{course.name}</td>
                <td className="border px-4 py-2">{course.totalEnrolled}</td>
                <td className="border px-2 py-2 lg:pl-[6vw] ">
                  {/* Action buttons */}

                  <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-3 rounded mr-2 transition-colors duration-300">Edit</button>
                  <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded mr-2 transition-colors duration-300">Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    </div>
  );
};

export default Courses;
