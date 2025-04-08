import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/api";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        console.log("Fetching projects..."); // Debug log
        const response = await api.get("/projects/getall"); 
        console.log("projects fetched:", response.data); // Debug log
        setProjects(response.data);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div>
      <h2>Project List</h2>
      {projects.length === 0 ? <p>No projects found.</p> : null}
      <ul>
        {projects.map((project) => (
          <li key={project.id}><Link to={`/project/${project.projectname}`} style={{ textDecoration: "none", color: "blue" }}>{project.projectname}</Link></li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;