import React from "react";
import LineChart from "./LineChart";
import CurrentBookings from "./CurrentBookings";

const Dashboard = () => {
  return (
    <main className="">
      <div className="p-4 py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          <div className="bg-white-100 rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Total Users
            </h3>
            <p className="text-3xl font-bold text-pink-600">34</p>
          </div>
          <div className="bg-white-100 rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Total Retailer
            </h3>
            <p className="text-3xl font-bold text-yellow-600">45</p>
          </div>
          <div className="bg-white-100 rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
             Total Category
            </h3>
            <p className="text-3xl font-bold text-red-600">42</p>
          </div>
          <div className="bg-white-100 rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
             Total SubCategory
            </h3>
            <p className="text-3xl font-bold text-blue-600">10</p>
          </div>
        </div>

        <div className="mt-4 flex flex-col md:flex-row md:space-x-3">
          <div className="flex-1 bg-white shadow-md rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              User Growth Analytics
            </h3>
            <LineChart />
          </div>
          <div className="flex-1 bg-white shadow-md rounded-lg p-2">
            <CurrentBookings />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
