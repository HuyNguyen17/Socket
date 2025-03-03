import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const NavHeader = () => {

    const navigate = useNavigate();

    return(
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', maxWidth: '1200px'}}>
            <h1 className="font-weight-light display-1" style={{ marginRight: '20px' }}>The Socket</h1>
            <div style={{display: 'flex' }}>
                <button
                onClick={() => navigate('/login')}
                style={{
                    padding: '10px 20px', fontSize: '16px', backgroundColor: 'transparent', color: 'black', border: 'none',
                    borderBottom: '2px solid transparent', cursor: 'pointer', marginLeft: '10px', transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.borderBottom = '2px solid black'}
                onMouseLeave={(e) => e.target.style.borderBottom = '2px solid transparent'}
                >
                Login/Register
                </button>
                <button
                onClick={() => navigate('/users')}
                style={{
                    padding: '10px 20px', fontSize: '16px', backgroundColor: 'transparent', color: 'black', border: 'none',
                    borderBottom: '2px solid transparent', cursor: 'pointer', marginLeft: '10px', transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.borderBottom = '2px solid black'}
                onMouseLeave={(e) => e.target.style.borderBottom = '2px solid transparent'}
                >
                User List
                </button>
                <button
                onClick={() => navigate('/projects')}
                style={{
                    padding: '10px 20px', fontSize: '16px', backgroundColor: 'transparent', color: 'black', border: 'none',
                    borderBottom: '2px solid transparent', cursor: 'pointer', marginLeft: '10px', transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.borderBottom = '2px solid black'}
                onMouseLeave={(e) => e.target.style.borderBottom = '2px solid transparent'}
                >
                Project List
                </button>
            </div>
        </div>
    );
};
export default NavHeader;