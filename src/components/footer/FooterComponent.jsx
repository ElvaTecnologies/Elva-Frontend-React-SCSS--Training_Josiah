import React from "react";
import "./FooterComponent.scss";
import logoImage from "../../assets/images/logo.svg";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

function FooterComponent() {
  return (
    <footer>
      <div>
        <img src={logoImage} style={{ color: "#fff" }} alt="" />
        <ul className="icons">
          <li>
            <FaFacebook />
          </li>
          <li>
            <FaYoutube />
          </li>
          <li>
            <FaTwitter />
          </li>
          <li>
            <FaPinterest />
          </li>
          <li>
            <FaInstagram />
          </li>
        </ul>
      </div>
      <div className="nav">
        <ul>
          <li> About Us</li>
          <li> Contact</li>
          <li> Blog</li>
        </ul>
        <ul>
          <li> Careers</li>
          <li> Support</li>
          <li> Privacy Policy</li>
        </ul>
      </div>
      <div className="btn-div">
        <button className="fancy">Request Invite</button>© Easybank. All Rights
        Reserved
      </div>
    </footer>
  );
}

export default FooterComponent;
