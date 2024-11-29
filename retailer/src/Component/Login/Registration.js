import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function RetailerRegistration() {
  const [retailers, setRetailers] = useState([]);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // Fetch existing retailers on component mount
    axios.get('http://localhost:3000/api/retailers')
      .then(response => setRetailers(response.data))
      .catch(error => console.error('Error fetching retailers:', error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    const formData = new FormData(e.target);
    const newRetailer = Object.fromEntries(formData.entries());

    // Check for existing retailer ID
    const isExisting = retailers.some(retailer => retailer.retid === newRetailer.retid);
    
    if (isExisting) {
      setErrorMessage('Retailer ID already exists!');
      return;
    }

    // Post the new retailer data
    axios.post('http://localhost:3000/api/retailers', newRetailer)
      .then(response => {
        setRetailers(prevRetailers => [...prevRetailers, response.data]);
        e.target.reset();
        setErrorMessage('');
        navigate('/');
      })
      .catch(error => {
        console.error('Error adding retailer:', error);
        setErrorMessage('Failed to register retailer!');
      });
  };

  const renderInputField = (id, label, type = 'text', required = true) => (
    <div className="space-y-1">
      <label htmlFor={id} className="block font-medium text-gray-800">{label}</label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
      />
    </div>
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4 text-center">Retailer KYC Registration</h1>
        <div className="flex justify-center">
          <form
            onSubmit={handleSubmit}
            className="max-h-[80vh] w-full max-w-lg bg-white p-8 shadow-lg rounded-lg border border-gray-200 overflow-y-auto"
          >
            {errorMessage && (
              <div className="bg-red-100 border border-red-400 text-red-700 p-2 mb-4 rounded">
                {errorMessage}
              </div>
            )}
            <div className="flex flex-col space-y-4">
              {renderInputField('retid', 'Retailer ID')}
              {renderInputField('retregno', 'Registration Number')}
              {renderInputField('retname', 'Retailer Name')}
              {renderInputField('contactno', 'Contact Number', 'tel')}
              {renderInputField('alternatecontact', 'Alternate Contact', 'tel')}
              {renderInputField('address', 'Address')}
              {renderInputField('state', 'State')}
              {renderInputField('city', 'City')}
              {renderInputField('pincode', 'Pincode')}
              {renderInputField('email', 'Email', 'email')}
              {renderInputField('url', 'Website URL', 'url', false)}
              {renderInputField('pan', 'PAN')}
              {renderInputField('password', 'Password', 'password')}
            </div>

            <button
              type="submit"
              className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition duration-200"
            >
              Register Retailer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RetailerRegistration;
