import React from "react";

// Importing logo
import logo from "./react-icon.png"

export const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className="logo-section">
                <img className="logo-image" src={logo} />
                <h1 className="logo">React Facts</h1>
            </div>
                <div className="course-section">
                    <h1 className="course-name">React Course - Project 1</h1>
            </div>
        </div>
    )
}