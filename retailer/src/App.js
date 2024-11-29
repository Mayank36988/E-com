import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Dashboard from './Component/Retailer/Dashboard';
import Sidebar from './Component/Retailer/Sidebar';
import Login from './Component/Login/Login';
import Registration from './Component/Login/Registration';
import Viewproduct from './Component/product/Viewproduct';
import Addproduct from './Component/product/Addproduct';


const App = () => {
    const location = useLocation(); 

    return (
        <div className="flex">
            
            {location.pathname !== '/login' && location.pathname !== '/register' && <Sidebar />}  
            <main className="flex-1 bg-gray-100">
                <Routes>
                    <Route path="/register" element={<Registration />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/product/view" element={<Viewproduct />} />
                    <Route path="/product/addnew" element={<Addproduct />} />


                </Routes>
            </main>
        </div>
    );
};

const AppWrapper = () => (
    <Router>
        <App />
    </Router>
);

export default AppWrapper;
