import React from 'react';
import { Link } from 'react-router-dom';
//import './Navbar.css'; // Add optional styling

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Beach Volleyball</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/rules">Rules</Link></li>
                <li><Link to="/events">Events</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
