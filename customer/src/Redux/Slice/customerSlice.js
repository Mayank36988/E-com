// Redux/Slice/authCustomerSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { registerCustomer, loginUser, verifyOtp } from '../Action/customerAction';

const authCustomerSlice = createSlice({
  name: 'authCustomer',
  initialState: {
    user: null,
    customer: null,
    loading: false,
    error: null,
    otpVerified: false, // New state for OTP verification
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Login actions
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Register actions
      .addCase(registerCustomer.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerCustomer.fulfilled, (state, action) => {
        state.loading = false;
        state.customer = action.payload;
        setTimeout(() => {
          state.customer = null;
        }, 5000);
      })
      .addCase(registerCustomer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        setTimeout(() => {
          state.error = null;
        }, 3000);
      })

      // OTP verification actions
      .addCase(verifyOtp.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.otpVerified = false;
      })
      .addCase(verifyOtp.fulfilled, (state) => {
        state.loading = false;
        state.otpVerified = true; // OTP verified successfully
      })
      .addCase(verifyOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default authCustomerSlice.reducer;
