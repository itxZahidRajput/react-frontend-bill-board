import React, { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <a className={`nav_link ${isMenuOpen ? 'open' : ''}`} href="/">     <img className="nav_logo" src="/footer_img.png"></img></a>

            <div className="menu-icon" onClick={toggleMenu}>
                <span role="img" aria-label="Menu">☰</span>
            </div>
            <ul className={`navigation ${isMenuOpen ? 'open' : ''}`}>
                <li><a href="/">Home</a></li>
                <li><a href="">Map</a></li>
                <li><a href="">Billboard</a></li>
                <li><a href="">About us</a></li>
                <li><a href="">Contact</a></li>
            </ul>
            <div className="login-signup-wrapper">
                <a className="navbar-link login" href="">Login</a>
                <a className="navbar-link signup" href="">Signup</a>
            </div>
        </nav>
    )
}
