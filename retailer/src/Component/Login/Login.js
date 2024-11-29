import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [retname, setRetname] = useState(''); 
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage(''); 

    try {
      const response = await axios.post('http://localhost:3000/api/retailers/login', {
        retname, 
        password,
      });

      const { retailerId } = response.data; 
      localStorage.setItem('retailerId', retailerId); 
      navigate('/dashboard'); // Redirect to dashboard on successful login
    } catch (error) {
      setErrorMessage(error.response?.data?.message || 'Login failed');
    }
  };

  const handleRegister = () => {
    navigate('/register'); // Redirect to the registration page
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-200">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Welcome Back!</h1>
        {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
        <form onSubmit={handleLogin}>
          <div className="flex flex-col space-y-4">
            <div>
              <label htmlFor="retname" className="block font-medium text-gray-700">Username</label>
              <input
                id="retname"
                type="text" 
                value={retname} 
                onChange={(e) => setRetname(e.target.value)} 
                required
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="password" className="block font-medium text-gray-700">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition duration-200">Login</button>
          </div>
        </form>
        <p className="text-center mt-4 text-gray-600">
          New user?{' '}
          <button onClick={handleRegister} className="text-blue-600 hover:underline">Register here</button>
        </p>
      </div>
    </div>
  );
}

export default Login;
