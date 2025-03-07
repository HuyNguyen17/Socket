import React from "react";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import NavHeaderButton from "./NavHeaderButton";
import { useNavigate } from 'react-router-dom';

const NavHeader = () => {
    const navigate = useNavigate();

    return(
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', maxWidth: '1200px'}}>
                <h1 className="font-weight-light display-1" style={{marginRight: '20px', cursor: 'pointer'}} onClick={() => navigate("/")}>
                    The Socket
                </h1>
                <ButtonGroup as="nav">
                    <NavHeaderButton 
                        target ='/login'
                        label = "Login/Register"
                    />
                    <NavHeaderButton 
                        target ='/users'
                        label = "User List"
                    />
                    <NavHeaderButton 
                        target ='/projects'
                        label = "Project List"
                    />
                </ButtonGroup>
            </div>
        </div>
    );
};
export default NavHeader;