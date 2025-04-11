import React, {useState, useEffect} from "react";
import {useNavigate, useParams} from 'react-router-dom';

import api from "../api/api"

const EditProfile = () => {
    const [userData, setUserData] = useState({linkedin  : "",
                                                year    : "",
                                                major   : "",
                                                description : ""});
    
    const navigate = useNavigate();

    
    const [editFailed, setFailure] = useState(false);
    const [error, setError] = useState(false);
    

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                console.log("fetching");
                const token = localStorage.getItem('authToken');
                if (!token) {
                    setError(true);
                    return;
                }

                const usernameResponse = await api.get(`/users/decode`, {
                    headers: {
                        Authorization: `${token}`, // Send the token in the header
                    },
                });
                
                const username = (usernameResponse.data);

                const response = await api.get(`/users/getuser/${username}`);
                console.log(response.data);
                setUserData(response.data);
                console.log(userData);
            } catch (error) {
                console.error("Error fetching user profile:", error);
                setError(true);
            }
        };

        fetchUserProfile();
    }, []);

    const HandleEdit = async (e) => {
        try {
            e.preventDefault(); //don't refresh
            const body = {
                    ...userData
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

    const handleLinkedinChange = async (e) => {
        setUserData({
            ...userData,
            linkedin: e.target.value
        })
    }
    const handleMajorChange = async (e) => {
        setUserData({
            ...userData,
            major: e.target.value
        })
    }
    const handleYearChange = async (e) => {
        setUserData({
            ...userData,
            year: e.target.value
        })
    }
    const handleDescriptionChange = async (e) => {
        setUserData({
            ...userData,
            description: e.target.value
        })
    }

    return (
        <div>
            {editFailed ? <div style={{color: "red"}}>Edit Failed!</div> : ""}
            <form onSubmit={HandleEdit}>
                <label htmlFor="linkedin">LinkedIn</label><br/>
                <input
                    type="text" 
                    id="linkedin" 
                    name="linkedin"
                    value={userData.linkedin}
                    onChange={handleLinkedinChange}></input><br/>

                <label htmlFor="major">Major</label><br/>
                <input 
                    type="text"
                    id="major"
                    name="major"
                    value={userData.major} 
                    onChange={handleMajorChange}></input><br/>
                
                <label htmlFor="year">Year</label><br/>
                <input 
                type="text"
                id="year" 
                name="year" 
                value={userData.year} 
                onChange={handleYearChange}></input><br/>
                
                <label htmlFor="description">Description</label><br />
                <textarea
                    id="description"
                    name="description"
                    value={userData.description}
                    onChange={handleDescriptionChange}/><br />

                <button type="submit" style={{marginTop: '10px', marginBottom: '30px'}}>Submit</button>
            </form>
        </div>
    );
}

export default EditProfile;