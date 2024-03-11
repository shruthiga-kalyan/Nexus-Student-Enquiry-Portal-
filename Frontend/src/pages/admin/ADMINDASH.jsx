import AdminSideBar from './ADMINSIDE';


const AdminDashboard = () => {
  // Sample data for the chart


  return (
    <div>  
      <AdminSideBar />
      <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white">
        {/* Sidebar content goes here */}
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
          <div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
              <div className="max-w-md mx-auto">
                <div className="flex items-center space-x-5">
                  <div className="h-14 w-14 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                    <img className="h-full w-full object-cover" src="https://randomuser.me/api/portraits/men/24.jpg" alt="avatar" />
                  </div>
                  <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                    <h2 className="leading-relaxed">John Doe</h2>
                    <p className="text-sm text-gray-500 font-normal leading-relaxed">john.doe@example.com</p>
                  </div>
                </div>
                <div className="divide-y divide-gray-200">
                  <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                    <div className="flex items-center space-x-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 3a1 1 0 011-1h2a1 1 0 011 1v1h2.586a1 1 0 01.707 1.707l-9 9a1 1 0 01-1.414 0l-4-4A1 1 0 013.586 9H6V4a1 1 0 011-1zm10 3.414V10a1 1 0 01-1 1h-1.586l-6 6H5a2 2 0 01-2-2V7.414l6-6H17a1 1 0 011 1z" clipRule="evenodd" />
                      </svg>
                      <span>Joined: 12 Jan 2022</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M8 3a1 1 0 011-1h2a1 1 0 011 1v1h2.586a1 1 0 01.707 1.707l-9 9a1 1 0 01-1.414 0l-4-4A1 1 0 013.586 9H6V4a1 1 0 011-1zm10 3.414V10a1 1 0 01-1 1h-1.586l-6 6H5a2 2 0 01-2-2V7.414l6-6H17a1 1 0 011 1z" clipRule="evenodd" />
                      </svg>
                      <span>Location: New York, USA</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 3a1 1 0 011-1h2a1 1 0 011 1v1h2.586a1 1 0 01.707 1.707l-9 9a1 1 0 01-1.414 0l-4-4A1 1 0 013.586 9H6V4a1 1 0 011-1zm10 3.414V10a1 1 0 01-1 1h-1.586l-6 6H5a2 2 0 01-2-2V7.414l6-6H17a1 1 0 011 1z" clipRule="evenodd" />
                      </svg>
                      <span>Interests: Photography, Traveling</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AdminDashboard;




