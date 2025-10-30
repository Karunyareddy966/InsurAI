import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Plans from "./pages/Plans";
import Appointments from "./pages/Appointments";
import VoiceQuery from "./pages/VoiceQuery";
import Dashboard from "./pages/Dashboard";
import ContactUs from "./pages/ContactUs";
import "./App.css";

function App() {
  const [user, setUser] = useState(null); // null = not logged in

  return (
    <Router>
      {user && <Navbar role={user.role} setUser={setUser} />} {/* Show navbar only after login */}

      <div className="main-content">
        <Routes>
          {/* Before login */}
          {!user && (
            <>
              <Route path="/" element={<Login setUser={setUser} />} />
              <Route path="/register" element={<Register />} />
              <Route path="*" element={<Navigate to="/" />} />
            </>
          )}

          {/* After login */}
          {user && (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/plans" element={<Plans />} />
              <Route path="/appointments" element={<Appointments />} />
              <Route path="/voice" element={<VoiceQuery />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="*" element={<Navigate to="/" />} />
            </>
          )}
        </Routes>
      </div>

      <Footer /> {/* Footer always visible */}
    </Router>
  );
}

export default App;
