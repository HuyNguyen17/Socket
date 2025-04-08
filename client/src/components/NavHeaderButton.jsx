import React from "react";
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';


const NavHeaderButton = ({target, label}) => {

    const navigate = useNavigate();

    return(
        <Link to={target}>
        <Button
        style={{
            padding: '10px 20px', fontSize: '16px', backgroundColor: 'transparent', color: 'black', border: 'none',
            borderBottom: '2px solid transparent', cursor: 'pointer', marginLeft: '10px', transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => e.target.style.borderBottom = '2px solid black'}
        onMouseLeave={(e) => e.target.style.borderBottom = '2px solid transparent'}
        >
        {label}
        </Button>
        </Link>
    )

};

export default NavHeaderButton;