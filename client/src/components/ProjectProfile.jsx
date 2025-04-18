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
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching project profile:", error);
        setError(true);
      }
    };

    fetchProjectProfile();
  }, [projectname]);

  if (error) {
    return (
      <div className="messageBox">
        <h2>401 - Unauthorized</h2>
      </div>
    );
  }

  if (!projectData) {
    return (
      <div className="messageBox">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <div className="contentBox">
      <h2>{projectData.projectname}</h2>
      <h3>{"Project Creator: "} <Link to={"/users/" + projectData.username}>{projectData.username}</Link> </h3>
      <p>{projectData.description || "No description provided."}</p>
      <Link to="/projects">Go back to project list</Link>
    </div>
  );
};

export default ProjectProfile;