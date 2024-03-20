import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IoLogIn } from "react-icons/io5";
import logo from "./img/image1.jpg";
import { Link } from "react-router-dom";
function Header() {
  const [menu, setMenu] = useState("shop");

  return (
    // <header className="header">
    //   <div className="container">
    //     <div className="logo">
    //       <img src="logo.png" alt="Logo" />
    //       NiHi Shop
    //     </div>
    //     <div className="search">
    //       <input type="text" placeholder="Tìm kiếm sp..." />
    //       <button type="submit">Search</button>
    //     </div>
    //     <nav className="navbar">
    //       <ul>
    //         <li>
    //           <a href="#">Trang chủ</a>
    //         </li>
    //         <li>
    //           <a href="#">Sản phẩm</a>
    //         </li>
    //         <li>
    //           <a href="#">Giới thiệu</a>
    //         </li>
    //         <li>
    //           <a href="#">Tin tức</a>
    //         </li>
    //         <li>
    //           <a href="#">Liên hệ</a>
    //         </li>

    //         <li className="cart">
    //           <FontAwesomeIcon icon={faShoppingCart} />
    //           Giỏ hàng
    //         </li>
    //         <li className="button">
    //           Login <IoLogIn />
    //         </li>
    //       </ul>
    //     </nav>
    //   </div>
    // </header>

    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} style={{ width: "30px", height: "30px" }} alt ="header-logo" />
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
