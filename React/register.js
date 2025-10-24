import React, { useState } from "react";

function Register() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Registered Successfully!\nName: ${formData.name}`);
  };

  return (
    <div className="page">
      <h2>Register</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Full Name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
        <input type="email" placeholder="Email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
        <input type="password" placeholder="Password" required value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
