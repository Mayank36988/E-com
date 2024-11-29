import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Sidebar = ({ toggleUserTable }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true); // Default state to open
  const [productDropdownOpen, setProductDropdownOpen] = useState(false); // For Product dropdown
  const navigate = useNavigate();

  const handleToggleAndNavigate = (route) => {
    toggleUserTable();
    navigate(route);
  };

  return (
    <div
      className={`bg-white text-gray-800 shadow-lg flex flex-col transition-all duration-300 ${
        sidebarOpen ? "w-64" : "w-16"
      } md:w-64 h-screen`}
    >
      {/* Sidebar Header */}
      <div className="p-4 flex justify-between items-center border-b border-gray-200">
        <h1
          className={`text-2xl font-bold transition-opacity duration-300 md:opacity-100 ${
            !sidebarOpen && "opacity-0"
          } `}
        >
          Dashboard
        </h1>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 text-gray-600 hover:bg-gray-200 rounded-md md:hidden"
        >
          {sidebarOpen ? "✖️" : "☰"}
        </button>
      </div>

      {/* Search Bar */}
      <div className="px-4 my-4">
        <input
          type="text"
          placeholder="Search..."
          className={`pl-4 pr-4 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 w-full ${
            !sidebarOpen && "opacity-0 pointer-events-none"
          }`}
        />
      </div>

      {/* Sidebar Navigation */}
      <nav className="flex-1 px-2">
        <NavItem to="/dashboard" icon="🖥️" label="Dashboard" sidebarOpen={sidebarOpen} />
        
        {/* Product Item with Dropdown */}
        <div>
          <button
            onClick={() => setProductDropdownOpen(!productDropdownOpen)}
            className="flex items-center p-3 text-gray-800 hover:bg-gray-100 rounded-md transition-colors duration-300 w-full"
          >
            <span className="text-lg">📦</span>
            <span className={`ml-3 ${!sidebarOpen && "hidden"} md:block`}>
              Product
            </span>
          </button>

          {/* Dropdown for Product */}
          {productDropdownOpen && (
            <div className="ml-8">
              <NavItem
                to="/product/view"
                icon="👁️"
                label="View"
                sidebarOpen={sidebarOpen}
              />
              <NavItem
                to="/product/addnew"
                icon="➕"
                label="Add New"
                sidebarOpen={sidebarOpen}
              />
            </div>
          )}
        </div>

        <NavItem to="/banking" icon="🏛️" label="Banking" sidebarOpen={sidebarOpen} />
        <NavItem to="/orderhistory" icon="📜" label="Order History" sidebarOpen={sidebarOpen} />
        <NavItem to="/trackorder" icon="🏃" label="Track Order" sidebarOpen={sidebarOpen} />
        <NavItem to="/updateprofile" icon="🛍" label="Update Profile" sidebarOpen={sidebarOpen} />
        <NavItem to="/settings" icon="🛠️" label="Settings" sidebarOpen={sidebarOpen} />
      </nav>
    </div>
  );
};

// Reusable NavItem Component
const NavItem = ({ to, icon, label, sidebarOpen }) => (
  <Link
    to={to}
    className="flex items-center p-3 text-gray-800 hover:bg-gray-100 rounded-md transition-colors duration-300"
  >
    <span className="text-lg">{icon}</span>
    <span className={`ml-3 ${!sidebarOpen && "hidden"} md:block`}>
      {label}
    </span>
  </Link>
);

export default Sidebar;
