import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../api/api";

const UserProfile = () => {
  const { username } = useParams();
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem("authToken");
        if (!token) {
          setError(true);
          return;
        }
        const response = await api.get(`/users/getuser/${username}`);
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user profile:", error);
        setError(true);
      }
    };

    fetchUserProfile();
  }, [username]);

  if (error) {
    return (
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <h2>401 - Unauthorized</h2>
      </div>
    );
  }

  if (!userData) {
    return (
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <h2>Loading...</h2>
      </div>
    );
  }

  const containerStyle = {
    maxWidth: "900px",
    margin: "40px auto",
    backgroundColor: "#ffffff",
    padding: "30px",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    textAlign: "left",
  };

  const headingStyle = {
    fontSize: "28px",
    fontWeight: "700",
    color: "#333",
    marginBottom: "20px",
  };

  const infoStyle = {
    fontSize: "18px",
    color: "#555",
    lineHeight: "1.6",
    marginBottom: "12px",
  };

  const linkStyle = {
    color: "#007bff",
    textDecoration: "none",
  };

  const buttonContainerStyle = {
    marginTop: "40px",
    textAlign: "center",
  };

  const buttonStyle = {
    padding: "12px 24px",
    fontSize: "18px",
    cursor: "pointer",
    backgroundColor: "#ffffff",
    border: "1px solid #ddd",
    borderRadius: "8px",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>{userData.username}'s Profile</h1>

      <p style={infoStyle}>
        <strong>Email:</strong>{" "}
        <a href={`mailto:${userData.email}`} style={linkStyle}>
          {userData.email}
        </a>
      </p>

      <p style={infoStyle}>
        <strong>LinkedIn:</strong>{" "}
        <a href={userData.linkedin} target="_blank" rel="noopener noreferrer" style={linkStyle}>
          {userData.linkedin}
        </a>
      </p>

      <p style={infoStyle}>
        <strong>Major:</strong> {userData.major}
      </p>

      <p style={infoStyle}>
        <strong>Year:</strong> {userData.year}
      </p>

      <p style={infoStyle}>
        <strong>Description:</strong> {userData.description || "No description provided."}
      </p>

      <div style={buttonContainerStyle}>
        <Link to="/edit-profile">
          <button style={buttonStyle}>Edit My Profile</button>
        </Link>
      </div>
    </div>
  );
};

export default UserProfile;