import React from "react";
import { Link } from "react-router-dom";

function Navbar({ role, setUser }) {
  return (
    <nav className="navbar">
      <div className="logo">Insurance Portal</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/plans">Plans</Link></li>
        <li><Link to="/appointments">Appointments</Link></li>
        <li><Link to="/voice">Voice Query</Link></li>
        {role === "admin" && <li><Link to="/dashboard">Dashboard</Link></li>}
        <li><Link to="/contact">Contact</Link></li>
        <li><button onClick={() => setUser(null)}>Logout</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;
