import React from "react";
import "../App.css";

function Admin() {
  return (
    <div className="admin-container">
      <h1>Admin Dashboard</h1>
      <p>Manage users, policies, and analytics for InsurAI.</p>

      <div className="admin-buttons">
        <button className="admin-btn">View Users</button>
        <button className="admin-btn">Manage Policies</button>
        <button className="admin-btn">View Reports</button>
      </div>
    </div>
  );
}

export default Admin;
