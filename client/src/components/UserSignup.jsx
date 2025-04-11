import React, { useState } from "react";
import api from "../api/api";
import { useNavigate } from 'react-router-dom';

const UserSignup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const HandleSignup = async (e) => {
    e.preventDefault(); // don't refresh the page
    const body = {
      username,
      password,
      email
    };

    try {
      api.post("users/signup", body)
        .then(function (response) {
          console.log(response);
          console.log("Navigating to signup success");
          // If successful, navigate to the signup result page
          navigate("/signup-result", { state: { success: true } });
        })
        .catch(function (err) {
          console.log(err);
          navigate("/signup-result", { state: { success: false } });
        });
    } catch (err) {
      console.error(err.message);
      navigate("/signup-result", { state: { success: false } });
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
      <div style={{
        backgroundColor: "#ffffff", padding: "30px", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", width: "100%",
        maxWidth: "400px", textAlign: "center"
      }}>
        <h2 style={{ fontSize: "24px", fontWeight: "600", marginBottom: "20px" }}>Create an Account</h2>
        <form onSubmit={HandleSignup} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <label htmlFor="email" style={{ fontSize: "16px", textAlign: "left" }}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={{
              padding: "10px", fontSize: "16px", borderRadius: "8px", border: "1px solid #ddd", marginBottom: "10px"
            }}
          />

          <label htmlFor="username" style={{ fontSize: "16px", textAlign: "left" }}>Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            style={{
              padding: "10px", fontSize: "16px", borderRadius: "8px", border: "1px solid #ddd", marginBottom: "10px"
            }}
          />

          <label htmlFor="password" style={{ fontSize: "16px", textAlign: "left" }}>Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={{
              padding: "10px", fontSize: "16px", borderRadius: "8px", border: "1px solid #ddd", marginBottom: "10px"
            }}
          />

          <button
            type="submit"
            style={{
              padding: "12px 24px", fontSize: "18px", backgroundColor: "#ffffff", border: "1px solid #ddd", borderRadius: "8px", cursor: "pointer",
              width: "100%", marginTop: "20px"
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserSignup;