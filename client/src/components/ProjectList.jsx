import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/api";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await api.get("/projects/getall");
        setProjects(response.data);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      }
    };
    fetchProjects();
  }, []);

  const containerStyle = {
    maxWidth: "900px",
    margin: "40px auto",
    padding: "0 20px",
  };

  const listItemStyle = {
    backgroundColor: "#ffffff",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    marginBottom: "16px",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.05)",
  };

  const projectTitleStyle = {
    fontSize: "1.25rem",
    fontWeight: "600",
    color: "#black",
    textDecoration: "none",
  };

  const projectDescStyle = {
    marginTop: "8px",
    color: "#555",
    fontSize: "0.95rem",
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>User projects</h2>
      {projects.length === 0 ? (
        <p style={{ textAlign: "center" }}>No projects found.</p>
      ) : (
        projects.map((project) => {
          const desc = project.description ?? "";
          return (
            <div key={project.id} style={listItemStyle}>
              <Link to={`/project/${project.projectname}`} style={projectTitleStyle}>
                {project.projectname}
              </Link>
              <p style={projectDescStyle}>
                {desc.slice(0, 100)}
                {desc.length > 100 ? "..." : ""}
              </p>
            </div>
          );
        })
      )}
    </div>
  );
};

export default ProjectList;