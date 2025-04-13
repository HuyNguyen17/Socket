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

    return (
        <form onSubmit={HandleProjectSubmission}>
            <fieldset>
                <legend>Submit a new Project</legend>

                <label htmlFor="project_name">Project Name</label>
                <input
                    type="text"
                    id="project_name"
                    name="project_name"
                    value={project_name}
                    onChange={e => setProjectName(e.target.value)}
                    required
                />

                <label htmlFor="project_description">Description</label>
                <textarea
                    id="project_description"
                    name="project_description"
                    value={project_description}
                    onChange={e => setProjectDescription(e.target.value)}
                    rows="6"
                    required
                />

                <button type="submit">Submit</button>
            </fieldset>
        </form>
    );
};

export default ProjectCreation;