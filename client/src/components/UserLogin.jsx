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

  return (
    <form onSubmit={HandleLogin}>
      <fieldset>
        <legend>Login</legend>
        {loginFailed && <div className="failureMessage">
          Login Failed!
          </div>}
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
        <button onClick={() => navigate('/signup')} className="linkButton"> Create an account</button>
      </fieldset>
    </form>
  );
};

export default UserLogin;