import React, {useState} from "react";
import api from "../api/api"
import { useNavigate } from 'react-router-dom';
const ProjectCreation = () => {
    const [project_name, setProjectName] = useState("");
    const [project_description, setProjectDescription] = useState("");
    const navigate = useNavigate();

    const HandleProjectSubmission = async (e) => {
        e.preventDefault();
        const body = { project_name, project_description };
        try {
            await api.post("projects/submit", body);
            navigate("/project-create-result", { state: { success: true } });
        } catch (err) {
            console.error(err.message);
            navigate("/project-create-result", { state: { success: false } });
        }
    }
    const containerStyle = {
        maxWidth: "800px",
        margin: "40px auto",
        padding: "20px",
        backgroundColor: "#f8f9fa",
        borderRadius: "8px",
    };

    const formStyle = {
        display: "flex",
        flexDirection: "column",
    };

    const labelStyle = {
        marginBottom: "6px",
        fontWeight: "600",
        color: "#555",
    };

    const inputStyle = {
        width: "100%",
        padding: "10px",
        marginBottom: "16px",
        border: "1px solid #ccc",
        borderRadius: "6px",
        fontSize: "1rem",
        boxSizing: "border-box",
    };

    const inputFocusStyle = {
        ...inputStyle,
        borderColor: "#007bff",
    };

    const buttonStyle = {
        padding: "12px",
        backgroundColor: "#white",
        color: "black",
        border: "1px solid #ccc",
        borderRadius: "6px",
        fontSize: "1rem",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
    };

    return (
        <div style={containerStyle}>
            <form onSubmit={HandleProjectSubmission} style={formStyle}>
                <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#333" }}>Submit a new Project</h2>

                <label htmlFor="project_name" style={labelStyle}>Project Name</label>
                <input
                    type="text"
                    id="project_name"
                    name="project_name"
                    value={project_name}
                    onChange={e => setProjectName(e.target.value)}
                    style={inputStyle}
                    required
                />

                <label htmlFor="project_description" style={labelStyle}>Description</label>
                <textarea
                    id="project_description"
                    name="project_description"
                    value={project_description}
                    onChange={e => setProjectDescription(e.target.value)}
                    rows="6"
                    style={inputStyle}
                    required
                />

                <button type="submit" style={buttonStyle}>Submit</button>
            </form>
        </div>
    );
};

export default ProjectCreation;