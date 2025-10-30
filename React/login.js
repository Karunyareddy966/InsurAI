import React, { useState } from "react";

function Login({ setUser }) {
  const [isRegister, setIsRegister] = useState(false);
  const [loginData, setLoginData] = useState({ email: "", password: "", role: "user" });
  const [registerData, setRegisterData] = useState({ name: "", email: "", password: "" });

  // Handle Login
  const handleLogin = (e) => {
    e.preventDefault();
    if (loginData.email && loginData.password) {
      setUser({ email: loginData.email, role: loginData.role });
      alert(`${loginData.role} logged in successfully!`);
    }
  };

  // Handle Registration
  const handleRegister = (e) => {
    e.preventDefault();
    alert(`Registered successfully: ${registerData.name}`);
    setIsRegister(false); // go back to login after register
  };

  return (
    <div className="page">
      {!isRegister ? (
        <>
          <h2>Login</h2>
          <form className="form" onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              required
              value={loginData.email}
              onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
            />
            <input
              type="password"
              placeholder="Password"
              required
              value={loginData.password}
              onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
            />
            <select
              value={loginData.role}
              onChange={(e) => setLoginData({ ...loginData, role: e.target.value })}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
            <button type="submit">Login</button>
          </form>

          <p>
            New here?{" "}
            <button
              type="button"
              className="link-button"
              onClick={() => setIsRegister(true)}
            >
              Register Now
            </button>
          </p>
        </>
      ) : (
        <>
          <h2>Register</h2>
          <form className="form" onSubmit={handleRegister}>
            <input
              type="text"
              placeholder="Full Name"
              required
              value={registerData.name}
              onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })}
            />
            <input
              type="email"
              placeholder="Email"
              required
              value={registerData.email}
              onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
            />
            <input
              type="password"
              placeholder="Password"
              required
              value={registerData.password}
              onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
            />
            <button type="submit">Register</button>
          </form>

          <p>
            Already have an account?{" "}
            <button
              type="button"
              className="link-button"
              onClick={() => setIsRegister(false)}
            >
              Back to Login
            </button>
          </p>
        </>
      )}
    </div>
  );
}

export default Login;
