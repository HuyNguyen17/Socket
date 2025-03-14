import { React, useState, useEffect} from "react";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import NavHeaderButton from "./NavHeaderButton";
import api from "../api/api";
import { useNavigate } from 'react-router-dom';


const NavHeader = () => {

    const [username, setUsername] = useState(null);
    const [loggedIn, setLoginStatus] = useState(false);
    const navigate = useNavigate();
    
    // gotta use useEffect or else it will continutally re render infinite times. 
    
    useEffect(() => {
      const fetchUsername = async () => {
          try {
              const token = localStorage.getItem('authToken');
                if (!token) {

                    setLoginStatus(false);
                    console.error("Error no token");
                    return;
                }
                else {
                //only send a response if we have a token
                    setLoginStatus(true);
                    const response = await api.get(`/users/decode`);
                    setUsername(response.data);
              }
              
          } catch (error) {
              console.error("Error getting username:", error);
          }
      };
  
      fetchUsername();
  }, [setUsername, setLoginStatus]);

    const loggedOutLinks = <ButtonGroup as="nav">
                            <NavHeaderButton
                                target='/login'
                                label="Login/Register" />
                        </ButtonGroup>;

    const loggedInLinks = <ButtonGroup as="nav">
                                <NavHeaderButton
                                    target='/projects'
                                    label="Projects Page" />
                                <NavHeaderButton
                                    target={`/users/${username}`}
                                    label="My Profile" />
                                <NavHeaderButton
                                    target='/logout'
                                    label="Logout" />
                            </ButtonGroup>;

    //console.log(authToken); // uncomment to check if authToken is exists for debugging

    return(
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', maxWidth: '1200px'}}>
                <h1 className="font-weight-light display-1" style={{marginRight: '20px', cursor: 'pointer'}} onClick={() => navigate("/home")}>
                    The Socket
                </h1>
                {loggedIn ? loggedInLinks : loggedOutLinks}
            </div>
        </div>
    );

};

export default NavHeader;