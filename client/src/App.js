// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { useState, useEffect } from "react";
// import Cookies from "js-cookie";
// import Layout from "./Components/Layout/Layout";
// import Dashboard from "./Admin/Dashboard";
// import Login from "./Admin/Login";
// import UserManagement from "./Components/Pages/UserManagement";
// import CategoryManagement from "./Components/Pages/CategoryManagement";
// import SubCategoryManagement from "./Components/Pages/SubCategoryManagement";
// import RetailerRegistration from "./Components/Pages/RetailerMangment";
// import ProductList from "./Components/Pages/ProductList";

// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     const token = Cookies.get("access_token") || localStorage.getItem("accessToken");
//     console.log("Token found in App component:", token); 
//     setIsAuthenticated(!!token);
//   }, []);

//   const handleLoginSuccess = () => {
//     setIsAuthenticated(true); 
//   };

//   const handleLogout = () => {
//     setIsAuthenticated(false);
//     Cookies.remove("access_token");
//     localStorage.removeItem("accessToken");
//     console.log("User logged out and tokens removed."); 
//   };

//   return (
//     <Router>
//       {isAuthenticated ? (
//         <Layout onLogout={handleLogout}>
//           <Routes>
//             <Route path="/" element={<Dashboard />} />
//             <Route path="/user-management" element={<UserManagement />} />
//             <Route path="/categories" element={<CategoryManagement />} />
//             <Route path="/subcategories" element={<SubCategoryManagement />} />
//             <Route path="/retailers" element={<RetailerRegistration />} />
//             <Route path="/products" element={<ProductList />} />
//           </Routes>
//         </Layout>
//       ) : (
//         <Routes>
//           <Route path="*" element={<Login onLoginSuccess={handleLoginSuccess} />} />
        
//         </Routes>
//       )}
//     </Router>
//   );
// };

// export default App;


import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import Layout from "./Components/Layout/Layout";
import Dashboard from "./Admin/Dashboard";
import Login from "./Admin/Login";
import UserManagement from "./Components/Pages/UserMangement/UserManagement";
import CategoryManagement from "./Components/Pages/CategoryManagement";
import SubCategoryManagement from "./Components/Pages/SubCategoryManagement";
import RetailerRegistration from "./Components/Pages/RetailerMangment";
import ProductList from "./Components/Pages/ProductList";
import UserProfile from './Components/Pages/Profile';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = Cookies.get("access_token") || localStorage.getItem("accessToken");
    console.log("Token found in App component:", token);
    setIsAuthenticated(!!token);
  }, []);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    Cookies.remove("access_token");
    localStorage.removeItem("accessToken");
    console.log("User logged out and tokens removed.");
  };

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={!isAuthenticated ? <Login onLoginSuccess={handleLoginSuccess} /> : <Navigate to="/" />} />

        {/* Private Routes (only accessible if authenticated) */}
        {isAuthenticated ? (
          <>
            <Route path="/" element={<Layout onLogout={handleLogout}><Dashboard /></Layout>} />
            <Route path="/user-management" element={<Layout onLogout={handleLogout}><UserManagement /></Layout>} />
            <Route path="/categories" element={<Layout onLogout={handleLogout}><CategoryManagement /></Layout>} />
            <Route path="/subcategories" element={<Layout onLogout={handleLogout}><SubCategoryManagement /></Layout>} />
            <Route path="/retailers" element={<Layout onLogout={handleLogout}><RetailerRegistration /></Layout>} />
            <Route path="/products" element={<Layout onLogout={handleLogout}><ProductList /></Layout>} />
            <Route path="/profile/:userId" element={<Layout onLogout={handleLogout}><UserProfile /></Layout>} />

          </>
        ) : (
          <Route path="*" element={<Navigate to="/login" />} />
        )}
      </Routes>
    </Router>
  );
};

export default App;
