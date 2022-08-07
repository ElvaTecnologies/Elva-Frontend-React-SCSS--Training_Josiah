import React from "react";
import logoImage from "../../assets/images/logo.svg";

function NavBarComponent() {
  return (
    <div className="NavBarComponent">
      <div className="logo">
        <img src={logoImage} alt="logo" />
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Blog</li>
        <li>Careers</li>
      </ul>
      <button className="fancy"> Request Invite</button>
    </div>
  );
}

export default NavBarComponent;
