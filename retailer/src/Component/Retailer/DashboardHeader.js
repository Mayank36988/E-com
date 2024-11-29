 

import React, { useState } from 'react';
import { Bell, ChevronDown, LogOut } from 'lucide-react';

const DashboardHeader = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen((prev) => !prev);
    };

    return (
        <header className="flex items-center justify-between px-4 py-2 bg-white">
            <h2 className="text-xl font-semibold text-gray-800">Retailers</h2>
            <div className="flex items-center space-x-2">
                <div className="flex items-center">
                    <Bell className="w-5 h-5 mr-2 text-gray-600" />
                    <span className="text-md font-medium text-gray-800">Welcome, Mayank</span>
                </div>
                <div className="relative">
                    <button onClick={toggleDropdown} className="flex items-center text-sm p-1 rounded-md hover:border hover:border-gray-400">
                        <img
                            src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1726761458~exp=1726762058~hmac=9ac042b1fc2df46badce055889172b74932deabf05c182f0ac1aa87588702aad"
                            alt="User Avatar"
                            className="w-10 h-10 rounded-full mr-2"
                        />
                        <span>Mayank</span>
                        <ChevronDown className="w-4 h-4 ml-2" />
                    </button>
                    {dropdownOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-md z-10">
                            <div className="py-2">
                                <button className="block px-4 py-2 text-gray-700 hover:bg-gray-200 w-full text-left">Profile</button>
                                <button className="block px-4 py-2 text-gray-700 hover:bg-gray-200 w-full text-left">Settings</button>
                                <div className="border-t"></div>
                                <button className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 w-full text-left">
                                    <LogOut className="w-4 h-4 mr-2" />
                                    Logout
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default DashboardHeader;
