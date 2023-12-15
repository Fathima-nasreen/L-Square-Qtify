import React from "react";
//import Styles from "../Navbar/Navbar.modules.css";
import Button from "./Button/Button";
import Logo from "./Logo/logo";
import Search from "../Search/Search";
//import SearchBox from "../Search/search";
//import { Link } from "react-router-dom";

import './Navbar.css';


function Navbar() {
    return (
    <nav className="navbar">
        <Logo />
      
        <Search placeholder="Search a song of your choice"/>          
        <Button>Give Feedback</Button>
    </nav>
    )
  }
    export default Navbar;