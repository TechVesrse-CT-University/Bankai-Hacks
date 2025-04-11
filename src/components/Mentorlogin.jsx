import React, { useState } from "react";
import "./MentorLogin.css";

export default function MentorLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple frontend validation
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

  
    console.log("Mentor Login:", { email, password });
    setError("");
    alert("Login Successful!");
  };

  return (
    <div className="mentor-login-container">
      <h2>Mentor Login</h2>
      <form onSubmit={handleSubmit} className="mentor-login-form">
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </label>

        {error && <span className="error">{error}</span>}

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
