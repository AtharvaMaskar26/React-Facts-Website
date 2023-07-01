import React from "react";
import logo from "./Group.png"

export const Contents = () => {
    return (
        <div className="main-container">
            <img className="background-image" src={logo} />
            <div className="heading-container">
                <h1 className="facts-heading">Fun facts about React</h1>
            </div>
            <div className="list-container">
                <ul>
                    <li className="list-items">Was first released in 2013</li>
                    <li className="list-items">Was originally created by Jordan Walke</li>
                    <li className="list-items">Has well over 100K stars on GitHub</li>
                    <li className="list-items">Is maintained by Facebook</li>
                    <li className="list-items">Powers thousands of enterprise apps, including mobile apps</li>
                </ul>
            </div>
        </div>
    )
}