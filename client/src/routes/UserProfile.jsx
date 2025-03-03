import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavHeader from '../components/NavHeader'

import api from "../api/api";

const UserProfile = () => {
    const { username } = useParams(); // Get username from URL
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
        try {
            const response = await api.get(`/users/${username}`);
            setUser(response.data);
        } catch (error) {
            console.error("Failed to fetch user:", error);
        }
        };
        fetchUser();
    }, [username]);

    if (!user) return <h2>Loading...</h2>;

    return (
        <div>
        <NavHeader />
        <h2>{user.username}'s Profile</h2>
        <p>Email: {user.email || "N/A"}</p>
        </div>
    );
};

export default UserProfile;