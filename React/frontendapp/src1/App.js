import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CustomerLogin from './pages/CustomerLogin';
import AdminLogin from './pages/AdminLogin';
import AdminRegister from './pages/AdminRegister';
import Register from './pages/Register';
import Plans from './pages/Plans';
import Payment from './pages/Payment';
import ContactUs from './pages/ContactUs';
import Logout from './pages/Logout';
import Appointments from './pages/Appointments';
import Dashboard from './pages/Dashboard';
import VoiceQuery from './pages/VoiceQuery';
import AdminDashboard from './pages/AdminDashboard';
import "./App.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setIsAuthenticated(true);
      setIsAdmin(user.role === 'ADMIN');
    }
  }, []);

  return (
    <Router>
      {!isAdmin && <Navbar isAuthenticated={isAuthenticated} isAdmin={isAdmin} />}
      <Routes>
        {!isAuthenticated ? (
          <>
            <Route path="/" element={<CustomerLogin setAuth={setIsAuthenticated} />} />
            <Route path="/login" element={<CustomerLogin setAuth={setIsAuthenticated} />} />
            <Route path="/register" element={<Register setAuth={setIsAuthenticated} />} />
            {/* Hidden admin routes - not visible to regular users */}
            <Route path="/admin/login" element={<AdminLogin setAuth={setIsAuthenticated} setIsAdmin={setIsAdmin} />} />
            <Route path="/admin/register" element={<AdminRegister />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        ) : isAdmin ? (
          <>
            {/* Admin-only routes */}
            <Route path="/" element={<AdminDashboard />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/logout" element={<Logout setAuth={setIsAuthenticated} />} />
            <Route path="*" element={<Navigate to="/admin/dashboard" />} />
          </>
        ) : (
          <>
            {/* Customer routes */}
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/voice-query" element={<VoiceQuery />} />
            <Route path="/logout" element={<Logout setAuth={setIsAuthenticated} />} />
            <Route path="*" element={<Navigate to="/home" />} />
          </>
        )}
      </Routes>
      {!isAdmin && <Footer />}
    </Router>
  );
}

export default App;
