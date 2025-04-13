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

  return (
    <form onSubmit={handleEdit}>
      <fieldset>
        <legend>Edit your user profile</legend>
        {editFailed && (
          <div classname={"failureMessage"}>
            Edit Failed!
          </div>
        )}
        <label htmlFor="linkedin">LinkedIn</label>
        <input
          type="text"
          id="linkedin"
          name="linkedin"
          value={userData.linkedin}
          onChange={handleChange("linkedin")}
        />

        <label htmlFor="major">Major</label>
        <input
          type="text"
          id="major"
          name="major"
          value={userData.major}
          onChange={handleChange("major")}
        />

        <label htmlFor="year">Year</label>
        <input
          type="text"
          id="year"
          name="year"
          value={userData.year}
          onChange={handleChange("year")}
        />

        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={userData.description}
          onChange={handleChange("description")}
        />

        <button type="submit">Submit</button>
      </fieldset>
    </form>
  );
};

export default EditProfile;