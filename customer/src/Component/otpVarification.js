import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { verifyOtp } from '../Redux/Action/customerAction';

export default function OTPVerificationPage() {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState('');
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Fetching state from Redux store
  const { loading, otpVerified, error: otpError } = useSelector((state) => state.auth);

  // Handle OTP input change
  const handleChange = (element, index) => {
    if (isNaN(Number(element.target.value))) return; // Allow only numeric input

    // Update OTP state
    setOtp([...otp.map((d, idx) => (idx === index ? element.target.value : d))]);
    setError('');

    // Move focus to next input if current one is filled
    if (element.target.value !== '' && index < 5) {
      inputRefs[index + 1].current.focus();
    }
  };

  // Submit OTP form
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('OTP State:', otp);  // Log OTP state for debugging

    // Check if OTP is of 6 digits
    if (otp.join('').length !== 6) {
      setError('OTP 6 digits ka hona chahiye.');
    } else {
      console.log('Sending OTP:', otp.join(''));
      dispatch(verifyOtp({ otp: otp.join('') }));
    }
  };

  // Navigate to customer profile once OTP is verified
  useEffect(() => {
    console.log('OTP Verified:', otpVerified);  // Log OTP verification status
    if (otpVerified) {
      navigate('/customer-profile');
    }
  }, [otpVerified, navigate]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="px-4 py-5 sm:p-6 bg-[#2874f0]">
            <h2 className="text-center text-2xl font-bold text-white">OTP Verification</h2>
            <p className="mt-2 text-center text-sm text-gray-200"></p>
          </div>
          <form className="px-4 py-5 sm:p-6" onSubmit={handleSubmit}>
            <div className="flex justify-center space-x-2 mb-4">
              {otp.map((data, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength={1}
                  className="w-12 h-12 text-center text-2xl border-2 border-gray-300 rounded focus:outline-none focus:border-[#2874f0]"
                  value={data}
                  onChange={(e) => handleChange(e, index)}
                  ref={inputRefs[index]}
                />
              ))}
            </div>

            {error && <p className="mt-2 text-center text-sm text-red-600">{error}</p>}
            {otpError && <p className="mt-2 text-center text-sm text-red-600">{otpError.message || otpError}</p>}

            <div className="mt-6">
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#fb641b] hover:bg-[#fb641b]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#fb641b]"
                disabled={loading}
              >
                {loading ? 'Verifying...' : 'Verify OTP'}
              </button>
            </div>
          </form>
          <div className="px-4 py-3 bg-gray-50 text-center sm:px-6">
            <button className="font-medium text-[#2874f0] hover:text-[#2874f0]/80">
              Resend OTP
            </button>
          </div>
          <div className="px-4 py-3 bg-gray-50 text-center sm:px-6">
            <Link to="/login" className="font-medium text-[#2874f0] hover:text-[#2874f0]/80">
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
