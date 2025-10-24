import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ContactUs from "./pages/ContactUs";
import Dashboard from "./pages/Dashboard";
import Plans from "./pages/Plans";
import Appointments from "./pages/Appointments";
import VoiceQuery from "./pages/VoiceQuery";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/voice" element={<VoiceQuery />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
