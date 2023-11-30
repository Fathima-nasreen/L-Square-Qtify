import React from "react";
import "./Navbar.css";
import Button from "../Button/Button";
import Search from "../Search/Search";
import Logo from "../Logo/Logo";

function Navbar () {
    return(
        <nav className="navbar">
            <Logo />
            <Search placeHolder="Search a song of your choice"/>
            <Button>Give Feedback</Button>
        </nav>
    )
}

export default Navbar;