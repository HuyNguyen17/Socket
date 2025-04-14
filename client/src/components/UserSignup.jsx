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
    <form onSubmit={HandleSignup}>
      <fieldset>
        <legend>Create an Account</legend>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <button type="submit">
          Submit
        </button>
      </fieldset>
    </form>
  );
};

export default UserSignup;