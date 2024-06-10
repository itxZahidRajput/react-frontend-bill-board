import React from "react"

export default function Navbar() {
    return (
        <nav className="navbar">
            <div>
            <ul className="navigation">
                <li>Home</li>
                <li>Map</li>
                <li>Billboard</li>
                <li>About us</li>
                <li>Contact</li>
                </ul>
            </div>
            <div className="navbar-link">
                <a href="">Login</a>
                <a className="signup" href="">Signup</a>

            </div>
        </nav>
    )
}