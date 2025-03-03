import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/api";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        console.log("Fetching users..."); // Debug log
        const response = await api.get("/users"); 
        console.log("Users fetched:", response.data); // Debug log
        setUsers(response.data);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>User List</h2>
      {users.length === 0 ? <p>No users found.</p> : null}
      <ul>
        {users.map((user) => (
          <li key={user.username}><Link to={`/profile/${user.username}`} style={{ textDecoration: "none", color: "blue" }}>{user.username}</Link></li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;