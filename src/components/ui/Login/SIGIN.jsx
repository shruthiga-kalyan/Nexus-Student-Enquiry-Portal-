import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
const Signin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [formErrors, setFormErrors] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear the error message when the user starts typing in the input field
    setFormErrors({ ...formErrors, [name]: '' });
  };

  const handleNavigate = (path) => {
    navigate(path);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};

    // Validate email
    if (!formData.email) {
      errors.email = 'Email is required';
    }

    // Validate password
    if (!formData.password) {
      errors.password = 'Password is required';
    }

    // Update formErrors state with validation errors
    setFormErrors(errors);

    // If there are no errors, proceed with form submission
    if (Object.keys(errors).length === 0) {
      // Here, you can perform any additional actions, like submitting the form data
      console.log('Form submitted successfully!');
      // Example: submitForm(formData);
      handleNavigate('/admin/sidebar'); // Navigate to desired path
    }
  };

  return (
    <div className="w-full flex flex-wrap">
      {/* Login Section */}
      <div className="w-full md:w-1/2 flex flex-col">
        <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
          <p className="text-center text-3xl">Welcome.</p>
          <form className="flex flex-col pt-3 md:pt-8" onSubmit={handleSubmit}>
            <div className="flex flex-col pt-4">
              <label htmlFor="email" className="text-lg">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your@email.com"
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline ${formErrors.email && 'border-red-500'}`}
              />
              {formErrors.email && <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>}
            </div>
            <div className="flex flex-col pt-4">
              <label htmlFor="password" className="text-lg">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Password"
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline ${formErrors.password && 'border-red-500'}`}
              />
              {formErrors.password && <p className="text-red-500 text-xs mt-1">{formErrors.password}</p>}
            </div>
            <input type="submit" value="Log In" className="bg-yellow-400 text-white font-bold text-lg hover:bg-gray-400 p-2 mt-8" />
          </form>
          <div className="text-center pt-12 pb-12">
            <p>Don't have an account? <nbsp/>   <nbsp/>  
              <Link to="/signup" className="text- underline text-blue-600">Register.</Link>
            </p>
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

export default Signin;
