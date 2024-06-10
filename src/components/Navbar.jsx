import React from "react"

export default function Navbar() {
    return (
        <nav className="navbar">
        <ul className="navigation">
            <a href="">Home</a>
            <a href="">Map</a>
            <a href="">Billboard</a>
            <a href="">About us</a>
            <a href="">Contact</a>
        </ul>
        <div className="login-signup-wrapper">
            <a className="navbar-link login" href="">Login</a>
            <a className="navbar-link signup" href="">Signup</a>
        </div>
    </nav>
    )
}