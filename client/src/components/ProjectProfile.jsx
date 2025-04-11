import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import api from "../api/api";

const ProjectProfile = () => {
    const {projectname} = useParams();
    const [projectData, setProjectData] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchProjectProfile = async () => {
            console.log("Fetching " + projectname);
            try {
                const token = localStorage.getItem('authToken');
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

    // Display 401 if no project exists
    if (error) {
        return <div>401 - Unauthorized</div>;
    }

    if (!projectData) {
        return <div>Loading...</div>;
    }

    return (
        <div style={{padding: "20px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" 
        }}>
            <h1 style={{fontSize: "24px", fontWeight: "bold"}}>
                {projectData.projectname}
            </h1>
            <p style={{fontSize: "18px"}}>Description: {projectData.description}</p>
            {/*<div style={{ textAlign: 'center', marginTop: '50px' }}>
                <Link to="/edit-profile">
                    <button style={{padding: '15px 30px', fontSize: '28px', cursor: 'pointer', backgroundColor: 'white', border: 'black 1px solid', borderRadius: '5px'}}>
                        Edit My Profile
                    </button>
                </Link>
            </div>   */}
        </div>
    );
};

export default ProjectProfile;