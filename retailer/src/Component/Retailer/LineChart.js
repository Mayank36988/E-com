import React, { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';

const monthlyData = [
  { month: 'January', users: 30 },
  { month: 'February', users: 50 },
  { month: 'March', users: 70 },
  { month: 'April', users: 90 },
  { month: 'May', users: 100 },
  { month: 'June', users: 120 },
  { month: 'July', users: 150 },
];

const yearlyData = [
  { year: '2021', users: 300 },
  { year: '2022', users: 600 },
  { year: '2023', users: 900 },
  { year: '2024', users: 1200 },
];

const UserGrowthCharts = () => {
  const [selectedChart, setSelectedChart] = useState('monthly');

  const handleChartChange = (event) => {
    setSelectedChart(event.target.value);
  };

  return (
    <div>
      <h2>Retailer Growth Chart</h2>
      <select onChange={handleChartChange} value={selectedChart}>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>

      {selectedChart === 'monthly' && (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={monthlyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="users" fill="#4bc0c0" />
          </BarChart>
        </ResponsiveContainer>
      )}

      {selectedChart === 'yearly' && (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={yearlyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="users" fill="#ff6f61" />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default UserGrowthCharts;
