import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function RegistrationPage() {
  const [formData, setFormData] = useState({
    customer_name: '',
    age: '',
    gender: '',
    mobile: '',
    email: '',
    password: '',
    status: 'active'
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.customer_name || !formData.mobile || !formData.email || !formData.password || !formData.age || !formData.gender) {
      setError('Please fill in all fields.');
    } else {
      console.log('Registration submitted:', formData);
      // Redirect to login page after successful registration
      // navigate('/login');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="px-4 py-5 sm:p-6 bg-[#2874f0]">
            <h2 className="text-center text-2xl font-bold text-white">Create Account</h2>
            <p className="mt-2 text-center text-sm text-gray-200">
              Sign up with your mobile number to get started
            </p>
          </div>
          <form className="px-4 py-5 sm:p-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="customer_name" className="sr-only">Customer Name</label>
                <input
                  id="customer_name"
                  name="customer_name"
                  type="text"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#2874f0] focus:border-[#2874f0] focus:z-10 sm:text-sm"
                  placeholder="Enter Customer Name"
                  value={formData.customer_name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="age" className="sr-only">Age</label>
                <input
                  id="age"
                  name="age"
                  type="number"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#2874f0] focus:border-[#2874f0] focus:z-10 sm:text-sm"
                  placeholder="Enter Age"
                  value={formData.age}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="gender" className="sr-only">Gender</label>
                <select
                  id="gender"
                  name="gender"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#2874f0] focus:border-[#2874f0] focus:z-10 sm:text-sm"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="mobile" className="sr-only">Mobile number</label>
                <input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#2874f0] focus:border-[#2874f0] focus:z-10 sm:text-sm"
                  placeholder="Enter Mobile number"
                  value={formData.mobile}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#2874f0] focus:border-[#2874f0] focus:z-10 sm:text-sm"
                  placeholder="Enter Email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#2874f0] focus:border-[#2874f0] focus:z-10 sm:text-sm"
                  placeholder="Enter Password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
            </div>

            {error && <p className="mt-2 text-center text-sm text-red-600">{error}</p>}

            <div className="mt-6">
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#fb641b] hover:bg-[#fb641b]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#fb641b]"
              >
                CONTINUE
              </button>
            </div>
          </form>
          <div className="px-4 py-3 bg-gray-50 text-center sm:px-6">
            <Link to="/login" className="font-medium text-[#2874f0] hover:text-[#2874f0]/80">
              Existing User? Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
