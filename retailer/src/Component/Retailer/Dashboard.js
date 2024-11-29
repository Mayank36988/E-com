 
import React from 'react';
import LineChart from './LineChart';
import CurrentBookings from './CurrentBookings';
import DashboardHeader from './DashboardHeader';

const Dashboard = () => {
    return (
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
            <DashboardHeader />
            <div className="p-6">
                {/* Dashboard Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                    <div className="bg-white rounded-lg shadow p-6">
                        <h3 className="text-lg font-semibold text-gray-700 mb-2">Total Orders</h3>
                        <p className="text-3xl font-bold text-black600">1,444</p>
                    </div>
                    <div className="bg-white rounded-lg shadow p-6">
                        <h3 className="text-lg font-semibold text-gray-700 mb-2">Total Revenu
                        </h3>
                        <p className="text-3xl font-bold text-pink-600">$12,45</p>
                    </div>
                    <div className="bg-white rounded-lg shadow p-6">
                        <h3 className="text-lg font-semibold text-gray-700 mb-2">Orders sales
                        </h3>
                        <p className="text-3xl font-bold text-purple-600">42</p>
                    </div>
                    <div className="bg-white rounded-lg shadow p-6">
                        <h3 className="text-lg font-semibold text-gray-700 mb-2">Total Visiter
                        </h3>
                        <p className="text-3xl font-bold text-red-600">10</p>
                    </div>
                </div>

                {/* Analytics Section */}
                <div className="mt-6 flex flex-col md:flex-row md:space-x-4">
                    <div className="flex-1 bg-white shadow-md rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-gray-700 mb-4"></h3>
                        <LineChart />
                    </div>
                    <div className="flex-1 bg-white shadow-md rounded-lg p-6">
                        <CurrentBookings />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Dashboard;
