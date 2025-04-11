import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

const UserLogin = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginFailed, setFailure] = useState(false);

  const HandleLogin = async (e) => {
    e.preventDefault();
    try {
      const body = { username, password };
      const response = await api.post("users/login", body);
      localStorage.setItem("authToken", response.data.token);
      alert("Login Success!");
      navigate("/home");
    } catch (err) {
      console.error("Login Error!", err);
      setFailure(true);
    }
  };

  const containerStyle = {
    maxWidth: "500px",
    margin: "40px auto",
    backgroundColor: "#ffffff",
    padding: "30px",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  };

  const headingStyle = {
    fontSize: "28px",
    fontWeight: "700",
    marginBottom: "30px",
    textAlign: "center",
    color: "#333",
  };

  const labelStyle = {
    fontSize: "16px",
    fontWeight: "500",
    display: "block",
    marginBottom: "6px",
    marginTop: "16px",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    boxSizing: "border-box",
  };

  const buttonStyle = {
    marginTop: "30px",
    padding: "12px 24px",
    fontSize: "18px",
    backgroundColor: "#ffffff",
    border: "1px solid #ddd",
    borderRadius: "8px",
    cursor: "pointer",
    display: "block",
    width: "100%",
  };

  const errorStyle = {
    color: "red",
    marginBottom: "20px",
    textAlign: "center",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Login</h1>

      {loginFailed && <div style={errorStyle}>Login Failed!</div>}

      <form onSubmit={HandleLogin}>
        <label htmlFor="username" style={labelStyle}>Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={inputStyle}
        />

        <label htmlFor="password" style={labelStyle}>Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />

        <button type="submit" style={buttonStyle}>Login</button>
        <button onClick={() => navigate('/signup')} style={buttonStyle}> Create an account</button>
      </form>
    </div>
  );
};

export default UserLogin;