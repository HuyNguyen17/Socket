import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../api/api";

const ProjectProfile = () => {
  const { projectname } = useParams();
  const [projectData, setProjectData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProjectProfile = async () => {
      console.log("Fetching " + projectname);
      try {
        const token = localStorage.getItem("authToken");
        if (!token) {
          setError(true);
          return;
        }
        const response = await api.get(`/projects/get_project/${projectname}`);
        setProjectData(response.data);
      } catch (error) {
        console.error("Error fetching project profile:", error);
        setError(true);
      }
    };

    fetchProjectProfile();
  }, [projectname]);

  if (error) {
    return (
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <h2>401 - Unauthorized</h2>
      </div>
    );
  }

  if (!projectData) {
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

  const titleStyle = {
    fontSize: "28px",
    fontWeight: "700",
    color: "#333",
    marginBottom: "20px",
  };

  const descStyle = {
    fontSize: "18px",
    color: "#555",
    lineHeight: "1.6",
  };

  const backLinkStyle = {
    display: "inline-block",
    marginTop: "30px",
    color: "#007bff",
    textDecoration: "none",
    fontWeight: "500",
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>{projectData.projectname}</h1>
      <p style={descStyle}>{projectData.description || "No description provided."}</p>
      <Link to="/projects" style={backLinkStyle}>Go back to project list</Link>
    </div>
  );
};

export default ProjectProfile;