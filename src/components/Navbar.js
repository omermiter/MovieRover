import React from 'react';
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar(){
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/popular" className="nav-link">Popular Movies</Link>
            </div>
        </nav>
    )
}


export default Navbar;