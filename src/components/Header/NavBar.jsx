import React, { useState } from "react";
import logoImage from "../../assets/images/logo.svg";
import "./navComponent.scss";
import { FaBars, FaXbox } from "react-icons/fa";

function NavBarComponent() {
  const [menuOpen, setMenuOpen] = useState(true);
  return (
    <div className="NavBarComponent">
      <div className="logo">
        <img src={logoImage} alt="logo" />
      </div>
      <ul style={menuOpen ? { visibility: "visible" } : null}>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Blog</li>
        <li>Careers</li>
      </ul>
      <button className="fancy"> Request Invite</button>
      <button
        className="mobile-menu-button"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        {menuOpen ? "x" : <FaBars />}
        {/* <FaBars /> */}
        {/* <FaXbox /> */}
      </button>
    </div>
  );
}

export default NavBarComponent;
