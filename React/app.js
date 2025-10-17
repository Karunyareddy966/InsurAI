import React, { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Logged in as ${email}`);
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-blue-50 to-blue-200 items-center justify-center">
      <motion.div
        className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Appointment Login
        </h2>
        <p className="text-gray-500 text-center mb-4">
          Manage your appointments and customer queries efficiently
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>

          <div className="text-center mt-4">
            <a href="#" className="text-blue-500 text-sm hover:underline">
              Forgot Password?
            </a>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

export default App;
