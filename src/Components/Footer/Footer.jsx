import React from "react";
import DeoLogo from "../../Images/DeoLogo.png";
import Browser from "../../Images/Browser.png";
import Facebook from "../../Images/FacebookLogo.png";
import Instagram from "../../Images/Instagram.png";
import Linkedin from "../../Images/Linkedin.png";
import email from "../../Images/email.png";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer_container gradient_border">
      <div className="footerLinksAndLogoImg">
        <div className="footerLinks">
          <Link to={"/"}>Home</Link>
          <a href="">Clients</a>
          <a href="">Portfolio</a>
          <a href="">Services</a>
          <Link to={"/about-us"}>About Us</Link>
        </div>
        <div className="footerLogo">
          <img src={DeoLogo} alt="Deobrandlab" />
        </div>
      </div>
      <div className="SocialLogoCont">
        <div>
          <a href="">
            <img src={Browser} alt="Browser" />
          </a>
        </div>
        <div>
          <a href="">
            <img src={Facebook} alt="Facebook" />
          </a>
        </div>
        <div>
          <a href="">
            <img src={Instagram} alt="Instagram" />
          </a>
        </div>
        <div>
          <a href="">
            <img src={Linkedin} alt="Linkedin" />
          </a>
        </div>
        <div>
          <a href="">
            <img src={email} alt="Email" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
