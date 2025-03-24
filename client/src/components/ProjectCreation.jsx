import React, {useState} from "react";
import api from "../api/api"
import { useNavigate } from 'react-router-dom';
const ProjectCreation = () => {
    const [project_name, setProjectName] = useState("");
    const [project_description, setProjectDescription] = useState("");
    const navigate = useNavigate();
    const HandleProjectSubmission = async (e) => {
        e.preventDefault();
            const body = {project_name, project_description}
        try {
            api.post("projects/submit", body)
                .then(function (response) {
                    console.log(response);
                    navigate("/project-create-result", {state:{success:true}});
                    }
                )
                .catch(function (err) {
                    console.log(err);
                    navigate("/project-create-result", {state:{success:false}});
                    }
                );
        }
        catch(err) {
            console.error(err.message);
            navigate("/project-create-result", {state:{success:false}});
        }

    }

    return (
        <div>
            <form onSubmit={HandleProjectSubmission}>
                <label htmlFor="project_name">Project name</label><br/>
                <input type="text" id="project_name" name="project_name" value={project_name} onChange={e => setProjectName(e.target.value)}></input><br/>
                <label htmlFor="project_description">Description</label><br/>
                <input type="text" id="project_description" name="project_description" value={project_description} onChange={e => setProjectDescription(e.target.value)}></input><br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default ProjectCreation;