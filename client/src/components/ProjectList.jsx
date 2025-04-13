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

  return (
    <div className="contentContainer">
      <h2>User projects</h2>
      {projects.length === 0 ? (
        <p>No projects found.</p>
      ) : (
        projects.map((project) => {
          const desc = project.description ?? "";
          return (
            <div key={project.id} className="itemContainer">
              <Link to={`/project/${project.projectname}`}>
                {project.projectname}
              </Link>
              <p>
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