import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../Redux/Action/customerAction';
import { Link, useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [formData, setFormData] = useState({ contact_no: '', password: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData));
    navigate('/otp');  // Redirect to OTP page after form submission
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="px-4 py-5 sm:p-6 bg-[#2874f0]">
            <h2 className="text-center text-2xl font-bold text-white">Login</h2>
            <p className="mt-2 text-center text-sm text-gray-200">
              Get access to your Orders, Wishlist, and Recommendations
            </p>
          </div>
          <form className="px-4 py-5 sm:p-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <input
                  id="contact_no"
                  name="contact_no"
                  type="text"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#2874f0] focus:border-[#2874f0] sm:text-sm"
                  placeholder="Enter Mobile Number"
                  value={formData.contact_no}
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#2874f0] focus:border-[#2874f0] sm:text-sm"
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
                {loading ? 'Logging in...' : 'Login'}
              </button>
            </div>
          </form>
          <div className="px-4 py-3 bg-gray-50 text-center sm:px-6">
            <Link to="/otp" className="font-medium text-[#2874f0] hover:text-[#2874f0]/80">
              Request OTP
            </Link>
          </div>
          <div className="px-4 py-3 bg-gray-50 text-center sm:px-6">
            <Link to="/register" className="font-medium text-[#2874f0] hover:text-[#2874f0]/80">
              Create an account?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
