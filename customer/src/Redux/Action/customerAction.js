import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const registerCustomer = createAsyncThunk(
    'customer/register',
    async (customerData, { rejectWithValue }) => {
        try {
            const response = await axios.post('http://localhost:3000/api/customerRegister', customerData);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async (credentials, { rejectWithValue }) => {
      try {
        const response = await axios.post('http://localhost:3000/api/customers/login', credentials);
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );

  export const verifyOtp = createAsyncThunk(
    'auth/verifyOtp',
    async (otpData, { rejectWithValue }) => {
      try {
        // Make API call to verify OTP
        const response = await axios.post('http://localhost:3000/api/customers/verify-otp', otpData);
        return response.data;  // Return data if OTP is valid
      } catch (error) {
        // If error occurs, log and return the error response
        console.error('Error verifying OTP:', error.response?.data || error.message);
        return rejectWithValue(error.response?.data || error.message);
      }
    }
  );
  