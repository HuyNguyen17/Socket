import React, {useState} from "react";
import {useNavigate} from 'react-router-dom';
import api from "../api/api"

const EditProfile = () => {
    const navigate = useNavigate();
    const [linkedin, setLinkedIn] = useState("");
    const [major, setMajor] = useState("");
    const [year , setYear] = useState("");
    const [description, setDescription] = useState("");
    
    const [editFailed, setFailure] = useState(false);

    const HandleEdit = async (e) => {
        try {
            e.preventDefault(); //don't refresh
            const body = {
                    linkedin,
                    major,
                    year,
                    description,
            }
            await api.put("users/edit", body)
                .then(function (response) {
                    console.log(response);
                    alert("Edit Success!");
                    navigate("/home");
                })
                .catch(function (err) {
                    console.log("Edit Failed!");
                    console.log(err);
                    setFailure(true);
                });
        }
        catch(err) {
            console.error(err.message);
            setFailure(true);
        }

    }

    return (
        <div>
            {editFailed ? <div style={{color: "red"}}>Edit Failed!</div> : ""}
            <form onSubmit={HandleEdit}>
                <label htmlFor="linkedin">LinkedIn</label><br/>
                <input type="text" id="linkedin" name="linkedin" value={linkedin} onChange={e => setLinkedIn(e.target.value)}></input><br/>
                <label htmlFor="major">Major</label><br/>
                <input type="text" id="major" name="major" value={major} onChange={e => setMajor(e.target.value)}></input><br/>
                <label htmlFor="year">Year</label><br/>
                <input type="text" id="year" name="year" value={year} onChange={e => setYear(e.target.value)}></input><br/>
                <label htmlFor="description">Description</label><br />
                <textarea id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)}/><br />
                <button type="submit" style={{marginTop: '10px', marginBottom: '30px'}}>Submit</button>
            </form>
        </div>
    );
}

export default EditProfile;