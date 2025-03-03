import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/api";

const UserProfile = () => {
    // Get username from URL
    const { username } = useParams(); 
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
        try {
            const response = await api.get(`/user/${username}`);
            setUser(response.data);
        } catch (error) {
            console.error("Failed to fetch user profile:", error);
        }
        };
        fetchUser();
    }, [username]);

    if (!user) return <div>Loading...</div>;

    return(
        <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>{user.username}</h2>
        <p>Email: {user.email}</p>
        {/* Add more profile details if needed */}
        </div>
    );
};

export default UserProfile;