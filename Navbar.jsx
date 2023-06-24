import React, {useState} from "react";
import logo from "../assets/react-logo.png"

const Navbar = () => {
    return (
        <nav>
            <img className="nav-icon" src={logo} />
            <h3 className="nav-logo_text">ReactFacts</h3>
            <h4 className="nav-title">ReactCourse-Project 1</h4>
        </nav>
    )
}

export default Navbar