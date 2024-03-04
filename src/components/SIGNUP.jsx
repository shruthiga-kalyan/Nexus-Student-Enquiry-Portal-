import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institute: '',
    mobile: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add validation logic
    // For simplicity, let's just navigate to another page
    navigate('/signin');
  };

  return (
    <div className="w-full flex flex-wrap">
      <div className="w-full md:w-1/2 flex flex-col">
        <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
          <p className="text-center text-3xl">Welcome.</p>
          <form className="flex flex-col pt-3 md:pt-8" onSubmit={handleSubmit}>
            <div className="flex flex-col pt-4">
              <label htmlFor="name" className="text-lg">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex flex-col pt-4">
              <label htmlFor="email" className="text-lg">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex flex-col pt-4">
              <label htmlFor="institute" className="text-lg">Educational Institute</label>
              <input
                type="text"
                id="institute"
                name="institute"
                value={formData.institute}
                onChange={handleInputChange}
                placeholder="Your educational institute"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex flex-col pt-4">
              <label htmlFor="mobile" className="text-lg">Phone Number</label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                placeholder="Your phone number"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex flex-col pt-4">
              <label htmlFor="password" className="text-lg">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Your password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <button type="submit" className="bg-yellow-400 text-white font-bold text-lg hover:bg-gray-400 p-2 mt-8">Register</button>
          </form>
          <div className="text-center pt-12 pb-12">
            {/* Additional content */}
          </div>
        </div>
      </div>
      {/* Image Section */}
      <div className="w-1/2 shadow-2xl">
        <img className="object-cover w-full h-screen hidden md:block" src='/public/5437683.jpg' alt="login background" />
      </div>
    </div>
  );
};

export default Signup;
