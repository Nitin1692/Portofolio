import React from "react";
import { Link } from "react-scroll";
import '../styles/navbar.css'
import Logo from '../assets/Nitin.__2_-removebg-preview.png'




function Navbar() {

  return (
    <div className="Navbar">
        <div className="logo">
            <img src={Logo} alt="" srcset="" className="image" />
        </div>
        <div className="links">
            <Link to="container" spy={true} smooth={true} offset={50} duration={500} className="link">Home</Link>
            <Link to="About" spy={true} smooth={true} offset={50} duration={500} className="link">About</Link>
            <Link to="Project" spy={true} smooth={true} offset={50} duration={500} className="link">Projects</Link>
            <Link to="experience" spy={true} smooth={true} offset={50} duration={500} className="link">Experience</Link>
        </div>
    </div>
  );
}

export default Navbar;
