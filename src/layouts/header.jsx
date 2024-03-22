import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IoLogIn } from "react-icons/io5";
import { Link } from "react-router-dom";
import image1 from "../Assets/logo.png";
function Header() {
  const [menu, setMenu] = useState("shop");

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={image1} style={{ width: "30px", height: "30px" }} alt="header-logo" />
        <p>NiHi Shop</p>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("trangchu");
          }}
        >
          <Link to="/">Trang chủ</Link>
          {menu === "trangchu" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("sanpham");
          }}
        >
          <Link to="/product">Sản phẩm</Link>
          {menu === "sanpham" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("gioithieu");
          }}
        >
          <Link to="/about">Giới thiệu</Link>
          {menu === "gioithieu" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("lienhe");
          }}
        >
          <Link to="/contact">Liên hệ</Link>
          {menu === "lienhe" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <FaShoppingCart style={{ fontSize: "20px" }} />
        <button>
          Login <IoLogIn />
        </button>
      </div>
    </div>
  );
}
export default Header;
