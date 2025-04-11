import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

const EditProfile = () => {
  const [userData, setUserData] = useState({
    linkedin: "",
    year: "",
    major: "",
    description: "",
  });

  const navigate = useNavigate();
  const [editFailed, setFailure] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem("authToken");
        if (!token) {
          setError(true);
          return;
        }
        const usernameResponse = await api.get(`/users/decode`, {
          headers: { Authorization: `${token}` },
        });
        const username = usernameResponse.data;
        const response = await api.get(`/users/getuser/${username}`);
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user profile:", error);
        setError(true);
      }
    };

    fetchUserProfile();
  }, []);

  const handleChange = (field) => (e) => {
    setUserData({ ...userData, [field]: e.target.value });
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      const body = { ...userData };
      await api.put("users/edit", body);
      alert("Edit Success!");
      navigate("/home");
    } catch (err) {
      console.error("Edit Failed!", err);
      setFailure(true);
    }
  };

  const containerStyle = {
    maxWidth: "900px",
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

  const textareaStyle = {
    ...inputStyle,
    minHeight: "100px",
    resize: "vertical",
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

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Edit your user profile</h1>
      {editFailed && (
        <div style={{ color: "red", marginBottom: "20px", textAlign: "center" }}>
          Edit Failed!
        </div>
      )}
      <form onSubmit={handleEdit}>
        <label htmlFor="linkedin" style={labelStyle}>LinkedIn</label>
        <input
          type="text"
          id="linkedin"
          name="linkedin"
          value={userData.linkedin}
          onChange={handleChange("linkedin")}
          style={inputStyle}
        />

        <label htmlFor="major" style={labelStyle}>Major</label>
        <input
          type="text"
          id="major"
          name="major"
          value={userData.major}
          onChange={handleChange("major")}
          style={inputStyle}
        />

        <label htmlFor="year" style={labelStyle}>Year</label>
        <input
          type="text"
          id="year"
          name="year"
          value={userData.year}
          onChange={handleChange("year")}
          style={inputStyle}
        />

        <label htmlFor="description" style={labelStyle}>Description</label>
        <textarea
          id="description"
          name="description"
          value={userData.description}
          onChange={handleChange("description")}
          style={textareaStyle}
        />

        <button type="submit" style={buttonStyle}>Submit</button>
      </form>
    </div>
  );
};

export default EditProfile;