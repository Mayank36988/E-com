// App.js
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from './app/Store';
import CustomerRegistration from './Component/CustomerRegistration';
import Home from './Component/Home';
 import Login from './Component/Login'; 
import OTPVerificationPage from './Component/otpVarification';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={<CustomerRegistration />} />
                    <Route path="/login" element={<Login />} /> 
                    <Route path='/otp' element={<OTPVerificationPage/>}/>
                </Routes>
            </Router>
        </Provider>
    );
};

export default App;
