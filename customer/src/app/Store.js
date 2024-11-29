// store.js
import { configureStore } from '@reduxjs/toolkit';
import customerReducer from '../Redux/Slice/customerSlice';  // Import customer slice
import loginReducer from '../Redux/Slice/customerSlice';        // Import login slice
import otpReducer from '../Redux/Slice/customerSlice';            // Import OTP slice

const store = configureStore({
  reducer: {
    customer: customerReducer,  // Customer slice reducer
    auth: loginReducer,         // Login slice reducer
    otp: otpReducer,            // OTP slice reducer
  },
});

export default store;
