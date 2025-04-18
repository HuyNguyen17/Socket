import React from "react";
import { Link } from 'react-router-dom';


const NavHeaderButton = ({target, label}) => {

    return(
        <Link to={target}>
        <button
        className="navButton"
        >
        {label}
        </button>
        </Link>
    )

};

export default NavHeaderButton;