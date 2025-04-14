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


  return (
    <div className="contentBox">
      <h2>{userData.username}'s Profile</h2>

      <p>
        <strong>Email:</strong>{" "}
        <a href={`mailto:${userData.email}`}>
          {userData.email}
        </a>
      </p>

      <p>
        <strong>LinkedIn:</strong>{" "}
        <a href={userData.linkedin} target="_blank" rel="noopener noreferrer">
          {userData.linkedin}
        </a>
      </p>

      <p>
        <strong>Major:</strong> {userData.major}
      </p>

      <p>
        <strong>Year:</strong> {userData.year}
      </p>

      <p>
        <strong>Description:</strong> {userData.description || "No description provided."}
      </p>

      <div id="editButton">
        <Link to="/edit-profile">
        Edit My Profile
        </Link>
      </div>
    </div>
  );
};

export default UserProfile;