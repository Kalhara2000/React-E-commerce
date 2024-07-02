import React from "react";
import { assets } from '../../asset/assets';
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="Logo"/>
          <p>Random uhbub ijioo iub tft y7yyuyu njhj</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="Facebook"/>
            <img src={assets.twitter_icon} alt="Twitter"/>
            <img src={assets.linkedin_icon} alt="LinkedIn"/>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>Tel: +95 8956 23</li>
            <li>Email: friut.market@hello.lk</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 &copy; Friturs.com - All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
