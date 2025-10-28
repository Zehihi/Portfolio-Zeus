import React from "react";
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <h1 className="navbar-logo">Zeus Sulit loves you.</h1>
            <ul className="navbar-links">
                <li><a href="#hero">Home</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="navbar-right">
                <a href="#resume.pdf" className="btn">Download CV</a>
            </div>
        </nav>
    );
}

export default Navbar;
