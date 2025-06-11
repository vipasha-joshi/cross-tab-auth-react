import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username.trim() && password.trim()) {
      const channel = new BroadcastChannel("auth_channel");
      channel.postMessage({ type: "LOGIN" });
      navigate("/dashboard");
    } else {
      alert("Please enter username and password");
    }
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ height: "85vh" }}
    >
      <div className="card shadow-lg p-4" style={{ minWidth: "350px" }}>
        <h3 className="text-center mb-4">Login</h3>
        <input
          className="form-control mb-3"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="form-control mb-3"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn btn-dark w-100" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
