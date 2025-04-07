import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import api from "../api/api";

const UserProfile = () => {
    const {username} = useParams();
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const token = localStorage.getItem('authToken');
                if (!token) {
                    setError(true);
                    return;
                }
                const response = await api.get(`/users/getuser/${username}`);
                setUserData(response.data);
            } catch (error) {
                console.error("Error fetching user profile:", error);
                setError(true);
            }
        };

        fetchUserProfile();
    }, [username]);

    // Display 401 if no such user exists
    if (error) {
        return <div>401 - Unauthorized</div>;
    }

    if (!userData) {
        return <div>Loading...</div>;
    }

    return (
        <div style={{padding: "20px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" 
        }}>
            <h1 style={{fontSize: "24px", fontWeight: "bold"}}>
                {userData.username}'s Profile
            </h1>
            <p style={{fontSize: "18px"}}>Email: {userData.email}</p>
            <p style={{fontSize: "18px"}}>LinkedIn: <a href={userData.linkedin} target="_blank" rel="noopener noreferrer"> {userData.linkedin}</a></p>
            <p style={{fontSize: "18px"}}>Major: {userData.major}</p>
            <p style={{fontSize: "18px"}}>Year: {userData.year}</p>
            <p style={{fontSize: "18px"}}>Description: {userData.description}</p>
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
                <Link to="/edit-profile">
                    <button style={{padding: '15px 30px', fontSize: '28px', cursor: 'pointer', backgroundColor: 'white', border: 'black 1px solid', borderRadius: '5px'}}>
                        Edit My Profile
                    </button>
                </Link>
            </div>   
        </div>
    );
};

export default UserProfile;