import React from "react";
import logo from "./img/image1.jpg";
import { FaGooglePlusG, FaFacebookF, FaInstagram } from "react-icons/fa";
function Footer() {
  return (
    <div className="Footer">
      <div className="Footer-logo">
        <img src={logo} alt="footer-logo" style={{width:'80px'}}/>
        <p> NiHiShop</p>
      </div>
      <ul className="Footer-links">
        <li> Giới thiệu</li>
        <li>Dịch vụ khách hàng </li>
        <li> Liên hệ</li>
      </ul>
      <div className="Footer-social-icons">
        <div className="Footer-icons-container ">
          <FaGooglePlusG/>
        </div>
        <div className="Footer-icons-container ">
          <FaInstagram />
        </div>
        <div className="Footer-icons-container ">
          <FaFacebookF />
        </div>
      </div>
    </div>
  );
}
export default Footer;
