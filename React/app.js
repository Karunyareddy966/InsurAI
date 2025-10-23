import React, { useState } from "react";
import "./App.css";
function App() 
{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="title">Login</h1>
        <div className="input-group">
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Password</label>
          <div className="password-wrapper">
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <div className="options">
          <a href="#" className="forgot-password">
            Forgot password?
          </a>
        </div>

        <button className="login-btn">Login</button>
      </div>
    </div>
  );
}
export default App;
