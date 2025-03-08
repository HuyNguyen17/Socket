import React from "react";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import NavHeaderButton from "./NavHeaderButton";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { jwtDecode } from "jwt-decode";

const UserHeader = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState(null);
      
      // gotta use useEffect or else it will continutally re render infinite times. 
      useEffect(() => {
        console.log(jwtDecode(localStorage.getItem('authToken')));
      if (localStorage.getItem('authToken')) {
        const tempToken = jwtDecode(localStorage.getItem('authToken'));
        console.log(tempToken.username);
        setUsername(tempToken.username); 
      }
      }, []);

    return(
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', maxWidth: '1200px'}}>
                <h1 className="font-weight-light display-1" style={{marginRight: '20px', cursor: 'pointer'}} onClick={() => navigate("/home")}>
                    The Socket
                </h1>
                <ButtonGroup as="nav">
                    <NavHeaderButton 
                        target ='/projects'
                        label = "Projects Page"
                    />
                    <NavHeaderButton 
                        target={`/users/${username}`}
                        label = "My Profile"
                    />
                    <NavHeaderButton 
                        target ='/logout'
                        label = "Logout"
                    />
                </ButtonGroup>
            </div>
        </div>
    );
};
export default UserHeader;